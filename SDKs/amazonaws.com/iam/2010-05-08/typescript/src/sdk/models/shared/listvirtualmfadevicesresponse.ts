import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualMfaDevice } from "./virtualmfadevice";



// ListVirtualMfaDevicesResponse
/** 
 * Contains the response to a successful <a>ListVirtualMFADevices</a> request. 
**/
export class ListVirtualMfaDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: VirtualMfaDevice })
  virtualMfaDevices: VirtualMfaDevice[];
}
