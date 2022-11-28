import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";



// NetworkConfiguration
/** 
 * This structure specifies the network configuration for an ECS task.
**/
export class NetworkConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsvpcConfiguration" })
  awsvpcConfiguration?: AwsVpcConfiguration;
}
