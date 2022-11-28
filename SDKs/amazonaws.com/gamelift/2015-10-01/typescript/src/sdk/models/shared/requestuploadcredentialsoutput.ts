import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { AwsCredentials } from "./awscredentials";



// RequestUploadCredentialsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class RequestUploadCredentialsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=UploadCredentials" })
  uploadCredentials?: AwsCredentials;
}
