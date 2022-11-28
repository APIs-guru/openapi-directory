import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";



// DataDestination
/** 
 * The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an AWS Key Management Service (KMS) key (optional). 
**/
export class DataDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Config" })
  s3Config: S3Config;
}
