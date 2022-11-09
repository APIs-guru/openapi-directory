import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { PrivateLinkConfig } from "./privatelinkconfig";
import { AgentStatusEnum } from "./agentstatusenum";


// DescribeAgentResponse
/** 
 * DescribeAgentResponse
**/
export class DescribeAgentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArn" })
  agentArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @Metadata({ data: "json, name=LastConnectionTime" })
  lastConnectionTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PrivateLinkConfig" })
  privateLinkConfig?: PrivateLinkConfig;

  @Metadata({ data: "json, name=Status" })
  status?: AgentStatusEnum;
}
