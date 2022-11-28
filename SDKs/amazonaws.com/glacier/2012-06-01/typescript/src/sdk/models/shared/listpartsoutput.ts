import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartListElement } from "./partlistelement";



// ListPartsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListPartsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveDescription" })
  archiveDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MultipartUploadId" })
  multipartUploadId?: string;

  @SpeakeasyMetadata({ data: "json, name=PartSizeInBytes" })
  partSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=Parts", elemType: PartListElement })
  parts?: PartListElement[];

  @SpeakeasyMetadata({ data: "json, name=VaultARN" })
  vaultArn?: string;
}
