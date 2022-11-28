import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindowAssociationTarget } from "./instanceeventwindowassociationtarget";
import { InstanceEventWindowStateEnum } from "./instanceeventwindowstateenum";
import { Tag } from "./tag";
import { InstanceEventWindowTimeRange } from "./instanceeventwindowtimerange";
/**
 * The event window.
**/
export declare class InstanceEventWindow extends SpeakeasyBase {
    associationTarget?: InstanceEventWindowAssociationTarget;
    cronExpression?: string;
    instanceEventWindowId?: string;
    name?: string;
    state?: InstanceEventWindowStateEnum;
    tags?: Tag[];
    timeRanges?: InstanceEventWindowTimeRange[];
}
