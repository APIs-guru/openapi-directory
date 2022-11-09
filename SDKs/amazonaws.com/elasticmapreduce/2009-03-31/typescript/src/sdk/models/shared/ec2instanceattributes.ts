import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Ec2InstanceAttributes
/** 
 * Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
**/
export class Ec2InstanceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalMasterSecurityGroups" })
  additionalMasterSecurityGroups?: string[];

  @Metadata({ data: "json, name=AdditionalSlaveSecurityGroups" })
  additionalSlaveSecurityGroups?: string[];

  @Metadata({ data: "json, name=Ec2AvailabilityZone" })
  ec2AvailabilityZone?: string;

  @Metadata({ data: "json, name=Ec2KeyName" })
  ec2KeyName?: string;

  @Metadata({ data: "json, name=Ec2SubnetId" })
  ec2SubnetId?: string;

  @Metadata({ data: "json, name=EmrManagedMasterSecurityGroup" })
  emrManagedMasterSecurityGroup?: string;

  @Metadata({ data: "json, name=EmrManagedSlaveSecurityGroup" })
  emrManagedSlaveSecurityGroup?: string;

  @Metadata({ data: "json, name=IamInstanceProfile" })
  iamInstanceProfile?: string;

  @Metadata({ data: "json, name=RequestedEc2AvailabilityZones" })
  requestedEc2AvailabilityZones?: string[];

  @Metadata({ data: "json, name=RequestedEc2SubnetIds" })
  requestedEc2SubnetIds?: string[];

  @Metadata({ data: "json, name=ServiceAccessSecurityGroup" })
  serviceAccessSecurityGroup?: string;
}
