import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Location
/** 
 * The S3 location.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
