import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentNetworkInfo } from "./agentnetworkinfo";
import { AgentStatusEnum } from "./agentstatusenum";


// AgentInfo
/** 
 * Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.
**/
export class AgentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentId" })
  agentId?: string;

  @Metadata({ data: "json, name=agentNetworkInfoList", elemType: shared.AgentNetworkInfo })
  agentNetworkInfoList?: AgentNetworkInfo[];

  @Metadata({ data: "json, name=agentType" })
  agentType?: string;

  @Metadata({ data: "json, name=collectionStatus" })
  collectionStatus?: string;

  @Metadata({ data: "json, name=connectorId" })
  connectorId?: string;

  @Metadata({ data: "json, name=health" })
  health?: AgentStatusEnum;

  @Metadata({ data: "json, name=hostName" })
  hostName?: string;

  @Metadata({ data: "json, name=lastHealthPingTime" })
  lastHealthPingTime?: string;

  @Metadata({ data: "json, name=registeredTime" })
  registeredTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
