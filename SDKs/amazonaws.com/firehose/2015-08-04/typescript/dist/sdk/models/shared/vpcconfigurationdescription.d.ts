import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The details of the VPC of the Amazon ES destination.
**/
export declare class VpcConfigurationDescription extends SpeakeasyBase {
    roleArn: string;
    securityGroupIds: string[];
    subnetIds: string[];
    vpcId: string;
}
