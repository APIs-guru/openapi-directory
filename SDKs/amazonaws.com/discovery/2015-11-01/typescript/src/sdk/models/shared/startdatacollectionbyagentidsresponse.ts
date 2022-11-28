import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentConfigurationStatus } from "./agentconfigurationstatus";



export class StartDataCollectionByAgentIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentsConfigurationStatus", elemType: AgentConfigurationStatus })
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}
