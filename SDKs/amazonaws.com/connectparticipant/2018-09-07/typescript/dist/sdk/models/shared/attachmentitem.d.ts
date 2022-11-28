import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStatusEnum } from "./artifactstatusenum";
/**
 * The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.
**/
export declare class AttachmentItem extends SpeakeasyBase {
    attachmentId?: string;
    attachmentName?: string;
    contentType?: string;
    status?: ArtifactStatusEnum;
}
