import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetConfig } from "./instancefleetconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";
import { PlacementType } from "./placementtype";
/**
 * A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
**/
export declare class JobFlowInstancesConfig extends SpeakeasyBase {
    additionalMasterSecurityGroups?: string[];
    additionalSlaveSecurityGroups?: string[];
    ec2KeyName?: string;
    ec2SubnetId?: string;
    ec2SubnetIds?: string[];
    emrManagedMasterSecurityGroup?: string;
    emrManagedSlaveSecurityGroup?: string;
    hadoopVersion?: string;
    instanceCount?: number;
    instanceFleets?: InstanceFleetConfig[];
    instanceGroups?: InstanceGroupConfig[];
    keepJobFlowAliveWhenNoSteps?: boolean;
    masterInstanceType?: string;
    placement?: PlacementType;
    serviceAccessSecurityGroup?: string;
    slaveInstanceType?: string;
    terminationProtected?: boolean;
}
