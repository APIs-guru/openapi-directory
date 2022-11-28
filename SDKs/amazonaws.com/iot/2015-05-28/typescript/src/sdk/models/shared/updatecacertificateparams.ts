import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaCertificateUpdateActionEnum } from "./cacertificateupdateactionenum";



// UpdateCaCertificateParams
/** 
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
**/
export class UpdateCaCertificateParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CaCertificateUpdateActionEnum;
}
