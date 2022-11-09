import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartListElement } from "./partlistelement";


// ListPartsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListPartsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveDescription" })
  archiveDescription?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MultipartUploadId" })
  multipartUploadId?: string;

  @Metadata({ data: "json, name=PartSizeInBytes" })
  partSizeInBytes?: number;

  @Metadata({ data: "json, name=Parts", elemType: shared.PartListElement })
  parts?: PartListElement[];

  @Metadata({ data: "json, name=VaultARN" })
  vaultArn?: string;
}
