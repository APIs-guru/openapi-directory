import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExclusionPreview } from "./exclusionpreview";
import { PreviewStatusEnum } from "./previewstatusenum";


export class GetExclusionsPreviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusionPreviews", elemType: shared.ExclusionPreview })
  exclusionPreviews?: ExclusionPreview[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=previewStatus" })
  previewStatus: PreviewStatusEnum;
}
