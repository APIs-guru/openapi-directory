import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExclusionPreview } from "./exclusionpreview";
import { PreviewStatusEnum } from "./previewstatusenum";



export class GetExclusionsPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusionPreviews", elemType: ExclusionPreview })
  exclusionPreviews?: ExclusionPreview[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=previewStatus" })
  previewStatus: PreviewStatusEnum;
}
