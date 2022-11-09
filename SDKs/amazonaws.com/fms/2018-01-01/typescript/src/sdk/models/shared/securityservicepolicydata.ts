import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";


// SecurityServicePolicyData
/** 
 * Details about the security service that is being used to protect the resources.
**/
export class SecurityServicePolicyData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ManagedServiceData" })
  managedServiceData?: string;

  @Metadata({ data: "json, name=Type" })
  type: SecurityServiceTypeEnum;
}
