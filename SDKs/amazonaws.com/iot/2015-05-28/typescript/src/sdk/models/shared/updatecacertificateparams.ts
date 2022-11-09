import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CaCertificateUpdateActionEnum } from "./cacertificateupdateactionenum";


// UpdateCaCertificateParams
/** 
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
**/
export class UpdateCaCertificateParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CaCertificateUpdateActionEnum;
}
