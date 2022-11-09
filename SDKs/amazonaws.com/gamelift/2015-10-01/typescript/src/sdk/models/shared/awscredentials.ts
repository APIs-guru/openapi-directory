import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCredentials
/** 
 * Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.
**/
export class AwsCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=SecretAccessKey" })
  secretAccessKey?: string;

  @Metadata({ data: "json, name=SessionToken" })
  sessionToken?: string;
}
