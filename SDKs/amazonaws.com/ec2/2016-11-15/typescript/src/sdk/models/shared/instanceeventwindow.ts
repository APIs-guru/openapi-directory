import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindowAssociationTarget } from "./instanceeventwindowassociationtarget";
import { InstanceEventWindowStateEnum } from "./instanceeventwindowstateenum";
import { Tag } from "./tag";
import { InstanceEventWindowTimeRange } from "./instanceeventwindowtimerange";



// InstanceEventWindow
/** 
 * The event window.
**/
export class InstanceEventWindow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationTarget?: InstanceEventWindowAssociationTarget;

  @SpeakeasyMetadata()
  cronExpression?: string;

  @SpeakeasyMetadata()
  instanceEventWindowId?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  state?: InstanceEventWindowStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ elemType: InstanceEventWindowTimeRange })
  timeRanges?: InstanceEventWindowTimeRange[];
}
