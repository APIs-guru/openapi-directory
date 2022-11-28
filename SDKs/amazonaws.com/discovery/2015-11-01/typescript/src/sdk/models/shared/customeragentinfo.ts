import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerAgentInfo
/** 
 * Inventory data for installed discovery agents.
**/
export class CustomerAgentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeAgents" })
  activeAgents: number;

  @SpeakeasyMetadata({ data: "json, name=blackListedAgents" })
  blackListedAgents: number;

  @SpeakeasyMetadata({ data: "json, name=healthyAgents" })
  healthyAgents: number;

  @SpeakeasyMetadata({ data: "json, name=shutdownAgents" })
  shutdownAgents: number;

  @SpeakeasyMetadata({ data: "json, name=totalAgents" })
  totalAgents: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthyAgents" })
  unhealthyAgents: number;

  @SpeakeasyMetadata({ data: "json, name=unknownAgents" })
  unknownAgents: number;
}
