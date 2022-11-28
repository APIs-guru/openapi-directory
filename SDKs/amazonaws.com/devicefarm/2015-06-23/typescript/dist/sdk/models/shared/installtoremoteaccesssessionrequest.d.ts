import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
**/
export declare class InstallToRemoteAccessSessionRequest extends SpeakeasyBase {
    appArn: string;
    remoteAccessSessionArn: string;
}
