import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.
**/
export declare class AwsCredentials extends SpeakeasyBase {
    accessKeyId?: string;
    secretAccessKey?: string;
    sessionToken?: string;
}
