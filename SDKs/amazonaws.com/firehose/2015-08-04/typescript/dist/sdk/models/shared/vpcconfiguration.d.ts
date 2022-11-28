import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The details of the VPC of the Amazon ES destination.
**/
export declare class VpcConfiguration extends SpeakeasyBase {
    roleArn: string;
    securityGroupIds: string[];
    subnetIds: string[];
}
