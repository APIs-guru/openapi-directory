import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";



// SecurityServicePolicyData
/** 
 * Details about the security service that is being used to protect the resources.
**/
export class SecurityServicePolicyData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManagedServiceData" })
  managedServiceData?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: SecurityServiceTypeEnum;
}
