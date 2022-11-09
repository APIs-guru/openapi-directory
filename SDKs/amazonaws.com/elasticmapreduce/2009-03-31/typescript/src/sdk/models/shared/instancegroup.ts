import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";
import { Configuration } from "./configuration";
import { EbsBlockDevice } from "./ebsblockdevice";
import { InstanceGroupTypeEnum } from "./instancegrouptypeenum";
import { Configuration } from "./configuration";
import { MarketTypeEnum } from "./markettypeenum";
import { ShrinkPolicy } from "./shrinkpolicy";
import { InstanceGroupStatus } from "./instancegroupstatus";


// InstanceGroup
/** 
 * This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
**/
export class InstanceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: AutoScalingPolicyDescription;

  @Metadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @Metadata({ data: "json, name=Configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=ConfigurationsVersion" })
  configurationsVersion?: number;

  @Metadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @Metadata({ data: "json, name=EbsBlockDevices", elemType: shared.EbsBlockDevice })
  ebsBlockDevices?: EbsBlockDevice[];

  @Metadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InstanceGroupType" })
  instanceGroupType?: InstanceGroupTypeEnum;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=LastSuccessfullyAppliedConfigurations", elemType: shared.Configuration })
  lastSuccessfullyAppliedConfigurations?: Configuration[];

  @Metadata({ data: "json, name=LastSuccessfullyAppliedConfigurationsVersion" })
  lastSuccessfullyAppliedConfigurationsVersion?: number;

  @Metadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RequestedInstanceCount" })
  requestedInstanceCount?: number;

  @Metadata({ data: "json, name=RunningInstanceCount" })
  runningInstanceCount?: number;

  @Metadata({ data: "json, name=ShrinkPolicy" })
  shrinkPolicy?: ShrinkPolicy;

  @Metadata({ data: "json, name=Status" })
  status?: InstanceGroupStatus;
}
