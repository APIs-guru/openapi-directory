import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetConfig } from "./instancefleetconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";
import { PlacementType } from "./placementtype";



// JobFlowInstancesConfig
/** 
 * A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
**/
export class JobFlowInstancesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalMasterSecurityGroups" })
  additionalMasterSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=AdditionalSlaveSecurityGroups" })
  additionalSlaveSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=Ec2KeyName" })
  ec2KeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2SubnetId" })
  ec2SubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2SubnetIds" })
  ec2SubnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=EmrManagedMasterSecurityGroup" })
  emrManagedMasterSecurityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=EmrManagedSlaveSecurityGroup" })
  emrManagedSlaveSecurityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=HadoopVersion" })
  hadoopVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleets", elemType: InstanceFleetConfig })
  instanceFleets?: InstanceFleetConfig[];

  @SpeakeasyMetadata({ data: "json, name=InstanceGroups", elemType: InstanceGroupConfig })
  instanceGroups?: InstanceGroupConfig[];

  @SpeakeasyMetadata({ data: "json, name=KeepJobFlowAliveWhenNoSteps" })
  keepJobFlowAliveWhenNoSteps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MasterInstanceType" })
  masterInstanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Placement" })
  placement?: PlacementType;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessSecurityGroup" })
  serviceAccessSecurityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=SlaveInstanceType" })
  slaveInstanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=TerminationProtected" })
  terminationProtected?: boolean;
}
