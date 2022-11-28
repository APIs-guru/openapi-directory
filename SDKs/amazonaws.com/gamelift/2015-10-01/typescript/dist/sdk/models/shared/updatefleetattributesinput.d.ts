import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
/**
 * Represents the input for a request operation.
**/
export declare class UpdateFleetAttributesInput extends SpeakeasyBase {
    description?: string;
    fleetId: string;
    metricGroups?: string[];
    name?: string;
    newGameSessionProtectionPolicy?: ProtectionPolicyEnum;
    resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
}
