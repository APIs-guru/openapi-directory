import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";
/**
 * Details about the security service that is being used to protect the resources.
**/
export declare class SecurityServicePolicyData extends SpeakeasyBase {
    managedServiceData?: string;
    type: SecurityServiceTypeEnum;
}
