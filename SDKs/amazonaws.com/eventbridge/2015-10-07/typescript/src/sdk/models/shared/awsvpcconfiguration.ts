import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";


// AwsVpcConfiguration
/** 
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.
**/
export class AwsVpcConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignPublicIp" })
  assignPublicIp?: AssignPublicIpEnum;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=Subnets" })
  subnets: string[];
}
