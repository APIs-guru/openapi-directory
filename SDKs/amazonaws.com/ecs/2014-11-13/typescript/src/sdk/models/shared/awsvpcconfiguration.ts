import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";



// AwsVpcConfiguration
/** 
 * An object representing the networking details for a task or service.
**/
export class AwsVpcConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: AssignPublicIpEnum;

  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets: string[];
}
