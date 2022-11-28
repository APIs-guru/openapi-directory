import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a security group and Amazon Web Services account ID pair.
**/
export declare class UserIdGroupPair extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
