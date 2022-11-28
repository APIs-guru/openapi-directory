import { SpeakeasyBase } from "../../../internal/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";
/**
 * An object representing the network configuration for a task or service.
**/
export declare class NetworkConfiguration extends SpeakeasyBase {
    awsvpcConfiguration?: AwsVpcConfiguration;
}
