import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentConfigurationStatus } from "./agentconfigurationstatus";


export class StartDataCollectionByAgentIdsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentsConfigurationStatus", elemType: shared.AgentConfigurationStatus })
  agentsConfigurationStatus?: AgentConfigurationStatus[];
}
