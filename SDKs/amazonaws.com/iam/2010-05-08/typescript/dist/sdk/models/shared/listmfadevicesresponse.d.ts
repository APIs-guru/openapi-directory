import { SpeakeasyBase } from "../../../internal/utils";
import { MfaDevice } from "./mfadevice";
/**
 * Contains the response to a successful <a>ListMFADevices</a> request.
**/
export declare class ListMfaDevicesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    mfaDevices: MfaDevice[];
    marker?: string;
}
