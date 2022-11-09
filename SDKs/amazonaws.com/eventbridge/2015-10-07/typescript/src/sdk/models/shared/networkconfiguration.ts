import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";


// NetworkConfiguration
/** 
 * This structure specifies the network configuration for an ECS task.
**/
export class NetworkConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsvpcConfiguration" })
  awsvpcConfiguration?: AwsVpcConfiguration;
}
