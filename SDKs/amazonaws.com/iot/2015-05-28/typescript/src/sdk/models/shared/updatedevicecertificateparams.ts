import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceCertificateUpdateActionEnum } from "./devicecertificateupdateactionenum";



// UpdateDeviceCertificateParams
/** 
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
**/
export class UpdateDeviceCertificateParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeviceCertificateUpdateActionEnum;
}
