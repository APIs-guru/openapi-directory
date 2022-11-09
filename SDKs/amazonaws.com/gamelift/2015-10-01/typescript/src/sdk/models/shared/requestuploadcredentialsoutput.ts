import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";
import { AwsCredentials } from "./awscredentials";


// RequestUploadCredentialsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class RequestUploadCredentialsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @Metadata({ data: "json, name=UploadCredentials" })
  uploadCredentials?: AwsCredentials;
}
