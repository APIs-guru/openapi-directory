import { SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";
/**
 * Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
**/
export declare class InstallToRemoteAccessSessionResult extends SpeakeasyBase {
    appUpload?: Upload;
}
