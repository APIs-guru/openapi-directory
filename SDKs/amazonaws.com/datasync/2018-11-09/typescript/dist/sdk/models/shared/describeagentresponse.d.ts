import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { PrivateLinkConfig } from "./privatelinkconfig";
import { AgentStatusEnum } from "./agentstatusenum";
/**
 * DescribeAgentResponse
**/
export declare class DescribeAgentResponse extends SpeakeasyBase {
    agentArn?: string;
    creationTime?: Date;
    endpointType?: EndpointTypeEnum;
    lastConnectionTime?: Date;
    name?: string;
    privateLinkConfig?: PrivateLinkConfig;
    status?: AgentStatusEnum;
}
