import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";



// NetworkConfiguration
/** 
 * An object representing the network configuration for a task or service.
**/
export class NetworkConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsvpcConfiguration" })
  awsvpcConfiguration?: AwsVpcConfiguration;
}
