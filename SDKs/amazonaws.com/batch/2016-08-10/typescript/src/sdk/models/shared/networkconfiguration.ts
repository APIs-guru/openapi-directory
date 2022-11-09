import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";


// NetworkConfiguration
/** 
 * The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
**/
export class NetworkConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignPublicIp" })
  assignPublicIp?: AssignPublicIpEnum;
}
