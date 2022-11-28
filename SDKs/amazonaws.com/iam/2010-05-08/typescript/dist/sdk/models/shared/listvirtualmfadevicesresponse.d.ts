import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMfaDevice } from "./virtualmfadevice";
/**
 * Contains the response to a successful <a>ListVirtualMFADevices</a> request.
**/
export declare class ListVirtualMfaDevicesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    virtualMfaDevices: VirtualMfaDevice[];
}
