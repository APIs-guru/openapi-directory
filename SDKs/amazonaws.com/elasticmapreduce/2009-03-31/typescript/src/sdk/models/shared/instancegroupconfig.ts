import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicy } from "./autoscalingpolicy";
import { Configuration } from "./configuration";
import { EbsConfiguration } from "./ebsconfiguration";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { MarketTypeEnum } from "./markettypeenum";



// InstanceGroupConfig
/** 
 * Configuration defining a new instance group.
**/
export class InstanceGroupConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: AutoScalingPolicy;

  @SpeakeasyMetadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsConfiguration" })
  ebsConfiguration?: EbsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceRole" })
  instanceRole: InstanceRoleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
