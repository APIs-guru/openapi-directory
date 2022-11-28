import { SpeakeasyBase } from "../../../internal/utils";
import { ExclusionPreview } from "./exclusionpreview";
import { PreviewStatusEnum } from "./previewstatusenum";
export declare class GetExclusionsPreviewResponse extends SpeakeasyBase {
    exclusionPreviews?: ExclusionPreview[];
    nextToken?: string;
    previewStatus: PreviewStatusEnum;
}
