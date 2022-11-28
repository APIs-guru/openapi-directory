import { SpeakeasyBase } from "../../../internal/utils";
import { AgentNetworkInfo } from "./agentnetworkinfo";
import { AgentStatusEnum } from "./agentstatusenum";
/**
 * Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.
**/
export declare class AgentInfo extends SpeakeasyBase {
    agentId?: string;
    agentNetworkInfoList?: AgentNetworkInfo[];
    agentType?: string;
    collectionStatus?: string;
    connectorId?: string;
    health?: AgentStatusEnum;
    hostName?: string;
    lastHealthPingTime?: string;
    registeredTime?: string;
    version?: string;
}
