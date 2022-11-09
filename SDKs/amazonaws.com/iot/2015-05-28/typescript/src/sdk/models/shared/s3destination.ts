import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Destination
/** 
 * Describes the location of updated firmware in S3.
**/
export class S3Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}
