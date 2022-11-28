import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Destination
/** 
 * Describes the location of updated firmware in S3.
**/
export class S3Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}
