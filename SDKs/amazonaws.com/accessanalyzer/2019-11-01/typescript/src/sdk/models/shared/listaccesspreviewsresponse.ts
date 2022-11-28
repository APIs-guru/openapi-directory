import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewSummary } from "./accesspreviewsummary";



export class ListAccessPreviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPreviews", elemType: AccessPreviewSummary })
  accessPreviews: AccessPreviewSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
