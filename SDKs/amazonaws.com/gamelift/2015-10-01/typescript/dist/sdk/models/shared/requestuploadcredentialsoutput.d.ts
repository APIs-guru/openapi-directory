import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { AwsCredentials } from "./awscredentials";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class RequestUploadCredentialsOutput extends SpeakeasyBase {
    storageLocation?: S3Location;
    uploadCredentials?: AwsCredentials;
}
