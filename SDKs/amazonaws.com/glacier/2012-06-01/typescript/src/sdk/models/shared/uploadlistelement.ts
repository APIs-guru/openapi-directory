import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadListElement
/** 
 * A list of in-progress multipart uploads for a vault.
**/
export class UploadListElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveDescription" })
  archiveDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=MultipartUploadId" })
  multipartUploadId?: string;

  @SpeakeasyMetadata({ data: "json, name=PartSizeInBytes" })
  partSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=VaultARN" })
  vaultArn?: string;
}
