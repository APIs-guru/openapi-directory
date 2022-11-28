import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";



// UpdateFleetAttributesInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateFleetAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=MetricGroups" })
  metricGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NewGameSessionProtectionPolicy" })
  newGameSessionProtectionPolicy?: ProtectionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceCreationLimitPolicy" })
  resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
}
