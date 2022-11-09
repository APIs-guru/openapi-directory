import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";
/**
 * The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
**/
export declare class NetworkConfiguration extends SpeakeasyBase {
    assignPublicIp?: AssignPublicIpEnum;
}
