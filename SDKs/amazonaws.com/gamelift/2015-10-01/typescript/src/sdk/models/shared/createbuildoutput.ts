import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
import { S3Location } from "./s3location";
import { AwsCredentials } from "./awscredentials";



// CreateBuildOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateBuildOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Build" })
  build?: Build;

  @SpeakeasyMetadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=UploadCredentials" })
  uploadCredentials?: AwsCredentials;
}
