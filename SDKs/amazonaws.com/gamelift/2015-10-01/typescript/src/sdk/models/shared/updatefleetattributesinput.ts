import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";


// UpdateFleetAttributesInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateFleetAttributesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=MetricGroups" })
  metricGroups?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NewGameSessionProtectionPolicy" })
  newGameSessionProtectionPolicy?: ProtectionPolicyEnum;

  @Metadata({ data: "json, name=ResourceCreationLimitPolicy" })
  resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
}
