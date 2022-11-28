import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ec2InstanceAttributes
/** 
 * Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
**/
export class Ec2InstanceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalMasterSecurityGroups" })
  additionalMasterSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=AdditionalSlaveSecurityGroups" })
  additionalSlaveSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=Ec2AvailabilityZone" })
  ec2AvailabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2KeyName" })
  ec2KeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2SubnetId" })
  ec2SubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=EmrManagedMasterSecurityGroup" })
  emrManagedMasterSecurityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=EmrManagedSlaveSecurityGroup" })
  emrManagedSlaveSecurityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=IamInstanceProfile" })
  iamInstanceProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedEc2AvailabilityZones" })
  requestedEc2AvailabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=RequestedEc2SubnetIds" })
  requestedEc2SubnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessSecurityGroup" })
  serviceAccessSecurityGroup?: string;
}
