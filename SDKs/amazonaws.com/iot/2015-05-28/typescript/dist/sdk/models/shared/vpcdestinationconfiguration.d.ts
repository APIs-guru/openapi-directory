import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration information for a virtual private cloud (VPC) destination.
**/
export declare class VpcDestinationConfiguration extends SpeakeasyBase {
    roleArn: string;
    securityGroups?: string[];
    subnetIds: string[];
    vpcId: string;
}
