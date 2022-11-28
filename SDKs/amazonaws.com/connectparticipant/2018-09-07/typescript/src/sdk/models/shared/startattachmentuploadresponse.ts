import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadMetadata } from "./uploadmetadata";



export class StartAttachmentUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=UploadMetadata" })
  uploadMetadata?: UploadMetadata;
}
