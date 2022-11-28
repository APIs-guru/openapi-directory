import { SpeakeasyBase } from "../../../internal/utils";
import { AssignPublicIpEnum } from "./assignpublicipenum";
/**
 * An object representing the networking details for a task or service.
**/
export declare class AwsVpcConfiguration extends SpeakeasyBase {
    assignPublicIp?: AssignPublicIpEnum;
    securityGroups?: string[];
    subnets: string[];
}
