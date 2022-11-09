import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadMetadata } from "./uploadmetadata";


export class StartAttachmentUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachmentId" })
  attachmentId?: string;

  @Metadata({ data: "json, name=UploadMetadata" })
  uploadMetadata?: UploadMetadata;
}
