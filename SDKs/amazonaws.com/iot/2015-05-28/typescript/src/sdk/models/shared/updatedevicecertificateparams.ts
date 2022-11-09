import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceCertificateUpdateActionEnum } from "./devicecertificateupdateactionenum";


// UpdateDeviceCertificateParams
/** 
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
**/
export class UpdateDeviceCertificateParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeviceCertificateUpdateActionEnum;
}
