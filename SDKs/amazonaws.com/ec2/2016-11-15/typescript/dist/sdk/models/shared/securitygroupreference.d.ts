import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a VPC with a security group that references your security group.
**/
export declare class SecurityGroupReference extends SpeakeasyBase {
    groupId?: string;
    referencingVpcId?: string;
    vpcPeeringConnectionId?: string;
}
