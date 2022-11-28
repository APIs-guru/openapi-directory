import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { PrivateLinkConfig } from "./privatelinkconfig";
import { AgentStatusEnum } from "./agentstatusenum";



// DescribeAgentResponse
/** 
 * DescribeAgentResponse
**/
export class DescribeAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArn" })
  agentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastConnectionTime" })
  lastConnectionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateLinkConfig" })
  privateLinkConfig?: PrivateLinkConfig;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AgentStatusEnum;
}
