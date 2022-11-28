import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
/**
 * Information about alarms associated with the deployment group.
**/
export declare class AlarmConfiguration extends SpeakeasyBase {
    alarms?: Alarm[];
    enabled?: boolean;
    ignorePollAlarmFailure?: boolean;
}
