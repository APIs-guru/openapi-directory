import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { MarketTypeEnum } from "./markettypeenum";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";



// InstanceGroupDetail
/** 
 * Detailed information about an instance group.
**/
export class InstanceGroupDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BidPrice" })
  bidPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroupId" })
  instanceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceRequestCount" })
  instanceRequestCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceRole" })
  instanceRole: InstanceRoleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceRunningCount" })
  instanceRunningCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Market" })
  market: MarketTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: InstanceGroupStateEnum;
}
