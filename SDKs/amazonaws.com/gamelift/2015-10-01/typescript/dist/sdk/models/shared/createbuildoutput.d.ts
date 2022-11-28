import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
import { S3Location } from "./s3location";
import { AwsCredentials } from "./awscredentials";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class CreateBuildOutput extends SpeakeasyBase {
    build?: Build;
    storageLocation?: S3Location;
    uploadCredentials?: AwsCredentials;
}
