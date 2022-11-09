import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceGroupDetail } from "./instancegroupdetail";
import { PlacementType } from "./placementtype";


// JobFlowInstancesDetail
/** 
 * Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
**/
export class JobFlowInstancesDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ec2KeyName" })
  ec2KeyName?: string;

  @Metadata({ data: "json, name=Ec2SubnetId" })
  ec2SubnetId?: string;

  @Metadata({ data: "json, name=HadoopVersion" })
  hadoopVersion?: string;

  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @Metadata({ data: "json, name=InstanceGroups", elemType: shared.InstanceGroupDetail })
  instanceGroups?: InstanceGroupDetail[];

  @Metadata({ data: "json, name=KeepJobFlowAliveWhenNoSteps" })
  keepJobFlowAliveWhenNoSteps?: boolean;

  @Metadata({ data: "json, name=MasterInstanceId" })
  masterInstanceId?: string;

  @Metadata({ data: "json, name=MasterInstanceType" })
  masterInstanceType: string;

  @Metadata({ data: "json, name=MasterPublicDnsName" })
  masterPublicDnsName?: string;

  @Metadata({ data: "json, name=NormalizedInstanceHours" })
  normalizedInstanceHours?: number;

  @Metadata({ data: "json, name=Placement" })
  placement?: PlacementType;

  @Metadata({ data: "json, name=SlaveInstanceType" })
  slaveInstanceType: string;

  @Metadata({ data: "json, name=TerminationProtected" })
  terminationProtected?: boolean;
}
