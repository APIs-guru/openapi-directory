import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageSummary } from "./imagesummary";



export class ListImagePipelineImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageSummaryList", elemType: ImageSummary })
  imageSummaryList?: ImageSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
