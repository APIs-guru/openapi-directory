import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaDevice } from "./mfadevice";



// ListMfaDevicesResponse
/** 
 * Contains the response to a successful <a>ListMFADevices</a> request. 
**/
export class ListMfaDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata({ elemType: MfaDevice })
  mfaDevices: MfaDevice[];

  @SpeakeasyMetadata()
  marker?: string;
}
