import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { MarketTypeEnum } from "./markettypeenum";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";


// InstanceGroupDetail
/** 
 * Detailed information about an instance group.
**/
export class InstanceGroupDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;

  @Metadata({ data: "json, name=InstanceRequestCount" })
  instanceRequestCount: number;

  @Metadata({ data: "json, name=InstanceRole" })
  instanceRole: InstanceRoleTypeEnum;

  @Metadata({ data: "json, name=InstanceRunningCount" })
  instanceRunningCount: number;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @Metadata({ data: "json, name=Market" })
  market: MarketTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=State" })
  state: InstanceGroupStateEnum;
}
