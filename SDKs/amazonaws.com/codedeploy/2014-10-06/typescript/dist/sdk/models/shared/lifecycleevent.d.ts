import { SpeakeasyBase } from "../../../internal/utils";
import { Diagnostics } from "./diagnostics";
import { LifecycleEventStatusEnum } from "./lifecycleeventstatusenum";
/**
 * Information about a deployment lifecycle event.
**/
export declare class LifecycleEvent extends SpeakeasyBase {
    diagnostics?: Diagnostics;
    endTime?: Date;
    lifecycleEventName?: string;
    startTime?: Date;
    status?: LifecycleEventStatusEnum;
}
