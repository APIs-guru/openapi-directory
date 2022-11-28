import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";
import { Configuration } from "./configuration";
import { EbsBlockDevice } from "./ebsblockdevice";
import { InstanceGroupTypeEnum } from "./instancegrouptypeenum";
import { MarketTypeEnum } from "./markettypeenum";
import { ShrinkPolicy } from "./shrinkpolicy";
import { InstanceGroupStatus } from "./instancegroupstatus";
/**
 * This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
**/
export declare class InstanceGroup extends SpeakeasyBase {
    autoScalingPolicy?: AutoScalingPolicyDescription;
    bidPrice?: string;
    configurations?: Configuration[];
    configurationsVersion?: number;
    customAmiId?: string;
    ebsBlockDevices?: EbsBlockDevice[];
    ebsOptimized?: boolean;
    id?: string;
    instanceGroupType?: InstanceGroupTypeEnum;
    instanceType?: string;
    lastSuccessfullyAppliedConfigurations?: Configuration[];
    lastSuccessfullyAppliedConfigurationsVersion?: number;
    market?: MarketTypeEnum;
    name?: string;
    requestedInstanceCount?: number;
    runningInstanceCount?: number;
    shrinkPolicy?: ShrinkPolicy;
    status?: InstanceGroupStatus;
}
