import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC security groups and subnets that are attached to a project.
**/
export declare class TestGridVpcConfig extends SpeakeasyBase {
    securityGroupIds: string[];
    subnetIds: string[];
    vpcId: string;
}
