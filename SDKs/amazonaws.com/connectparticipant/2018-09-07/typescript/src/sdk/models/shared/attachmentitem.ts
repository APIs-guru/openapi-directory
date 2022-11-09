import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactStatusEnum } from "./artifactstatusenum";


// AttachmentItem
/** 
 * The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.
**/
export class AttachmentItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachmentId" })
  attachmentId?: string;

  @Metadata({ data: "json, name=AttachmentName" })
  attachmentName?: string;

  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ArtifactStatusEnum;
}
