import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerAgentInfo
/** 
 * Inventory data for installed discovery agents.
**/
export class CustomerAgentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeAgents" })
  activeAgents: number;

  @Metadata({ data: "json, name=blackListedAgents" })
  blackListedAgents: number;

  @Metadata({ data: "json, name=healthyAgents" })
  healthyAgents: number;

  @Metadata({ data: "json, name=shutdownAgents" })
  shutdownAgents: number;

  @Metadata({ data: "json, name=totalAgents" })
  totalAgents: number;

  @Metadata({ data: "json, name=unhealthyAgents" })
  unhealthyAgents: number;

  @Metadata({ data: "json, name=unknownAgents" })
  unknownAgents: number;
}
