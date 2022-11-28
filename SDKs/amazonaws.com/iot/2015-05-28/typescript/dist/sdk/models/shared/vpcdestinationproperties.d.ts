import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties of a virtual private cloud (VPC) destination.
**/
export declare class VpcDestinationProperties extends SpeakeasyBase {
    roleArn?: string;
    securityGroups?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
