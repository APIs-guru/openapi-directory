import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AutoScalingPolicy" })
  autoScalingPolicy?: AutoScalingPolicy;

  @Metadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @Metadata({ data: "json, name=Configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @Metadata({ data: "json, name=EbsConfiguration" })
  ebsConfiguration?: EbsConfiguration;

  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @Metadata({ data: "json, name=InstanceRole" })
  instanceRole: InstanceRoleTypeEnum;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=Market" })
  market?: MarketTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
