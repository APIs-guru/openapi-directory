import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCredentials
/** 
 * Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.
**/
export class AwsCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretAccessKey" })
  secretAccessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionToken" })
  sessionToken?: string;
}
