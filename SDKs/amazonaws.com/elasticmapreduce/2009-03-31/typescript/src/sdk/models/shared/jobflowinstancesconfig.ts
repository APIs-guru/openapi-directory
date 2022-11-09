import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceFleetConfig } from "./instancefleetconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";
import { PlacementType } from "./placementtype";


// JobFlowInstancesConfig
/** 
 * A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
**/
export class JobFlowInstancesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalMasterSecurityGroups" })
  additionalMasterSecurityGroups?: string[];

  @Metadata({ data: "json, name=AdditionalSlaveSecurityGroups" })
  additionalSlaveSecurityGroups?: string[];

  @Metadata({ data: "json, name=Ec2KeyName" })
  ec2KeyName?: string;

  @Metadata({ data: "json, name=Ec2SubnetId" })
  ec2SubnetId?: string;

  @Metadata({ data: "json, name=Ec2SubnetIds" })
  ec2SubnetIds?: string[];

  @Metadata({ data: "json, name=EmrManagedMasterSecurityGroup" })
  emrManagedMasterSecurityGroup?: string;

  @Metadata({ data: "json, name=EmrManagedSlaveSecurityGroup" })
  emrManagedSlaveSecurityGroup?: string;

  @Metadata({ data: "json, name=HadoopVersion" })
  hadoopVersion?: string;

  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @Metadata({ data: "json, name=InstanceFleets", elemType: shared.InstanceFleetConfig })
  instanceFleets?: InstanceFleetConfig[];

  @Metadata({ data: "json, name=InstanceGroups", elemType: shared.InstanceGroupConfig })
  instanceGroups?: InstanceGroupConfig[];

  @Metadata({ data: "json, name=KeepJobFlowAliveWhenNoSteps" })
  keepJobFlowAliveWhenNoSteps?: boolean;

  @Metadata({ data: "json, name=MasterInstanceType" })
  masterInstanceType?: string;

  @Metadata({ data: "json, name=Placement" })
  placement?: PlacementType;

  @Metadata({ data: "json, name=ServiceAccessSecurityGroup" })
  serviceAccessSecurityGroup?: string;

  @Metadata({ data: "json, name=SlaveInstanceType" })
  slaveInstanceType?: string;

  @Metadata({ data: "json, name=TerminationProtected" })
  terminationProtected?: boolean;
}
