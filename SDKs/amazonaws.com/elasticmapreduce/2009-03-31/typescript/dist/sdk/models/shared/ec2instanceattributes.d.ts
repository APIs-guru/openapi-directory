import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
**/
export declare class Ec2InstanceAttributes extends SpeakeasyBase {
    additionalMasterSecurityGroups?: string[];
    additionalSlaveSecurityGroups?: string[];
    ec2AvailabilityZone?: string;
    ec2KeyName?: string;
    ec2SubnetId?: string;
    emrManagedMasterSecurityGroup?: string;
    emrManagedSlaveSecurityGroup?: string;
    iamInstanceProfile?: string;
    requestedEc2AvailabilityZones?: string[];
    requestedEc2SubnetIds?: string[];
    serviceAccessSecurityGroup?: string;
}
