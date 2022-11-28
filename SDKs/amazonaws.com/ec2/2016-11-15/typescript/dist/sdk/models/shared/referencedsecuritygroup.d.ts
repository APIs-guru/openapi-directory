import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Describes the security group that is referenced in the security group rule.
**/
export declare class ReferencedSecurityGroup extends SpeakeasyBase {
    groupId?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
