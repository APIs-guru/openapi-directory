import { SpeakeasyBase } from "../../../internal/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";
/**
 * This structure specifies the network configuration for an ECS task.
**/
export declare class NetworkConfiguration extends SpeakeasyBase {
    awsvpcConfiguration?: AwsVpcConfiguration;
}
