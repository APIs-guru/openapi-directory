import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Destination
/** 
 * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
**/
export class S3Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=metadataKey" })
  metadataKey?: string;
}
