import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The summary of a virtual private cloud (VPC) destination.
**/
export declare class VpcDestinationSummary extends SpeakeasyBase {
    roleArn?: string;
    securityGroups?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
