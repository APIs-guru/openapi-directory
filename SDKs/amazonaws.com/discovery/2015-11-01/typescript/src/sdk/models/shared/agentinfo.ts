import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentNetworkInfo } from "./agentnetworkinfo";
import { AgentStatusEnum } from "./agentstatusenum";



// AgentInfo
/** 
 * Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.
**/
export class AgentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=agentNetworkInfoList", elemType: AgentNetworkInfo })
  agentNetworkInfoList?: AgentNetworkInfo[];

  @SpeakeasyMetadata({ data: "json, name=agentType" })
  agentType?: string;

  @SpeakeasyMetadata({ data: "json, name=collectionStatus" })
  collectionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorId" })
  connectorId?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: AgentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=hostName" })
  hostName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastHealthPingTime" })
  lastHealthPingTime?: string;

  @SpeakeasyMetadata({ data: "json, name=registeredTime" })
  registeredTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
