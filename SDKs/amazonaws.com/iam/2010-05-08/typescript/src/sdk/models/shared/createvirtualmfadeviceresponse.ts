import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualMfaDevice } from "./virtualmfadevice";



// CreateVirtualMfaDeviceResponse
/** 
 * Contains the response to a successful <a>CreateVirtualMFADevice</a> request. 
**/
export class CreateVirtualMfaDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  virtualMfaDevice: VirtualMfaDevice;
}
