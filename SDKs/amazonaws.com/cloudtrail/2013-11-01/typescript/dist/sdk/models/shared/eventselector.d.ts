import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataResource } from "./dataresource";
import { ReadWriteTypeEnum } from "./readwritetypeenum";
/**
 * <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
**/
export declare class EventSelector extends SpeakeasyBase {
    dataResources?: DataResource[];
    excludeManagementEventSources?: string[];
    includeManagementEvents?: boolean;
    readWriteType?: ReadWriteTypeEnum;
}
