import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";


// NetworkConfiguration
/** 
 * An object representing the network configuration for a task or service.
**/
export class NetworkConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsvpcConfiguration" })
  awsvpcConfiguration?: AwsVpcConfiguration;
}
