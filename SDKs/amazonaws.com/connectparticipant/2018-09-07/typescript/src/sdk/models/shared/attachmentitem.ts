import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStatusEnum } from "./artifactstatusenum";



// AttachmentItem
/** 
 * The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.
**/
export class AttachmentItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=AttachmentName" })
  attachmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ArtifactStatusEnum;
}
