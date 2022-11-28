import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated.
**/
export declare class AgentConfigurationStatus extends SpeakeasyBase {
    agentId?: string;
    description?: string;
    operationSucceeded?: boolean;
}
