import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the VPC configuration that CodeBuild accesses.
**/
export declare class VpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnets?: string[];
    vpcId?: string;
}
