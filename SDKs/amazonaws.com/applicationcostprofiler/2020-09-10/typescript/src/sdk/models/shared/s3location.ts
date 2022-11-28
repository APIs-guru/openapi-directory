import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Location
/** 
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;
}
