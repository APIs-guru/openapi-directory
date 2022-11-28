import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupDetail } from "./instancegroupdetail";
import { PlacementType } from "./placementtype";
/**
 * Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
**/
export declare class JobFlowInstancesDetail extends SpeakeasyBase {
    ec2KeyName?: string;
    ec2SubnetId?: string;
    hadoopVersion?: string;
    instanceCount: number;
    instanceGroups?: InstanceGroupDetail[];
    keepJobFlowAliveWhenNoSteps?: boolean;
    masterInstanceId?: string;
    masterInstanceType: string;
    masterPublicDnsName?: string;
    normalizedInstanceHours?: number;
    placement?: PlacementType;
    slaveInstanceType: string;
    terminationProtected?: boolean;
}
