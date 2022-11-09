import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Build } from "./build";
import { S3Location } from "./s3location";
import { AwsCredentials } from "./awscredentials";


// CreateBuildOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateBuildOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Build" })
  build?: Build;

  @Metadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @Metadata({ data: "json, name=UploadCredentials" })
  uploadCredentials?: AwsCredentials;
}
