import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UploadListElement
/** 
 * A list of in-progress multipart uploads for a vault.
**/
export class UploadListElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveDescription" })
  archiveDescription?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=MultipartUploadId" })
  multipartUploadId?: string;

  @Metadata({ data: "json, name=PartSizeInBytes" })
  partSizeInBytes?: number;

  @Metadata({ data: "json, name=VaultARN" })
  vaultArn?: string;
}
