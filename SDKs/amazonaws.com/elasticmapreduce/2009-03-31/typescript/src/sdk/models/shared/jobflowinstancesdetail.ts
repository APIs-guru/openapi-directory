import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupDetail } from "./instancegroupdetail";
import { PlacementType } from "./placementtype";



// JobFlowInstancesDetail
/** 
 * Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
**/
export class JobFlowInstancesDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ec2KeyName" })
  ec2KeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2SubnetId" })
  ec2SubnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=HadoopVersion" })
  hadoopVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroups", elemType: InstanceGroupDetail })
  instanceGroups?: InstanceGroupDetail[];

  @SpeakeasyMetadata({ data: "json, name=KeepJobFlowAliveWhenNoSteps" })
  keepJobFlowAliveWhenNoSteps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MasterInstanceId" })
  masterInstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterInstanceType" })
  masterInstanceType: string;

  @SpeakeasyMetadata({ data: "json, name=MasterPublicDnsName" })
  masterPublicDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=NormalizedInstanceHours" })
  normalizedInstanceHours?: number;

  @SpeakeasyMetadata({ data: "json, name=Placement" })
  placement?: PlacementType;

  @SpeakeasyMetadata({ data: "json, name=SlaveInstanceType" })
  slaveInstanceType: string;

  @SpeakeasyMetadata({ data: "json, name=TerminationProtected" })
  terminationProtected?: boolean;
}
