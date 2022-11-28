import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";
import { Configuration } from "./configuration";
import { EbsBlockDevice } from "./ebsblockdevice";
import { InstanceGroupTypeEnum } from "./instancegrouptypeenum";
import { MarketTypeEnum } from "./markettypeenum";
import { ShrinkPolicy } from "./shrinkpolicy";
import { InstanceGroupStatus } from "./instancegroupstatus";



// InstanceGroup
/** 
 * This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
**/
export class InstanceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: AutoScalingPolicyDescription;

  @SpeakeasyMetadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=ConfigurationsVersion" })
  configurationsVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsBlockDevices", elemType: EbsBlockDevice })
  ebsBlockDevices?: EbsBlockDevice[];

  @SpeakeasyMetadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupType" })
  instanceGroupType?: InstanceGroupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfullyAppliedConfigurations", elemType: Configuration })
  lastSuccessfullyAppliedConfigurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfullyAppliedConfigurationsVersion" })
  lastSuccessfullyAppliedConfigurationsVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedInstanceCount" })
  requestedInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=RunningInstanceCount" })
  runningInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ShrinkPolicy" })
  shrinkPolicy?: ShrinkPolicy;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InstanceGroupStatus;
}
