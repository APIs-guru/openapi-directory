import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Config } from "./s3config";
/**
 * The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an AWS Key Management Service (KMS) key (optional).
**/
export declare class DataDestination extends SpeakeasyBase {
    s3Config: S3Config;
}
