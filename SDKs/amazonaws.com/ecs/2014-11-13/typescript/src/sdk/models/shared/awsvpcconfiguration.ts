import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";


// AwsVpcConfiguration
/** 
 * An object representing the networking details for a task or service.
**/
export class AwsVpcConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: AssignPublicIpEnum;

  @Metadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=subnets" })
  subnets: string[];
}
