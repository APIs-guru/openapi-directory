import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageSummary } from "./imagesummary";


export class ListImageBuildVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageSummaryList", elemType: shared.ImageSummary })
  imageSummaryList?: ImageSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
