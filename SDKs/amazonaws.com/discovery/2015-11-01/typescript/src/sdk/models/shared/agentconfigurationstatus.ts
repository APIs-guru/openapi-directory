import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AgentConfigurationStatus
/** 
 * Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.
**/
export class AgentConfigurationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=operationSucceeded" })
  operationSucceeded?: boolean;
}
