import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides ownership and status information for an Amazon EC2 security group.
**/
export declare class Ec2SecurityGroup extends SpeakeasyBase {
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    status?: string;
}
