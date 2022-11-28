import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";



// AwsVpcConfiguration
/** 
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.
**/
export class AwsVpcConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignPublicIp" })
  assignPublicIp?: AssignPublicIpEnum;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=Subnets" })
  subnets: string[];
}
