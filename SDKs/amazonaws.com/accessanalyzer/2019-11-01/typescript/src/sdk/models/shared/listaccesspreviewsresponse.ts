import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessPreviewSummary } from "./accesspreviewsummary";


export class ListAccessPreviewsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPreviews", elemType: shared.AccessPreviewSummary })
  accessPreviews: AccessPreviewSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
