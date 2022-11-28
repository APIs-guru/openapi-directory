import { SpeakeasyBase } from "../../../internal/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";
/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.
**/
export declare class AwsVpcConfiguration extends SpeakeasyBase {
    assignPublicIp?: AssignPublicIpEnum;
    securityGroups?: string[];
    subnets: string[];
}
