import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AgentConfigurationStatus
/** 
 * Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.
**/
export class AgentConfigurationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentId" })
  agentId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=operationSucceeded" })
  operationSucceeded?: boolean;
}
