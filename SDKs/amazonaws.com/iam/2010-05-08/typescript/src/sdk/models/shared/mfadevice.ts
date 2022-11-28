import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MfaDevice
/** 
 * <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
**/
export class MfaDevice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enableDate: Date;

  @SpeakeasyMetadata()
  serialNumber: string;

  @SpeakeasyMetadata()
  userName: string;
}
