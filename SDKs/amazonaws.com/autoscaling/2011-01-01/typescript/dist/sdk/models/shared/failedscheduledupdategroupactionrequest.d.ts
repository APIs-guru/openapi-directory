import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a scheduled action that could not be created, updated, or deleted.
**/
export declare class FailedScheduledUpdateGroupActionRequest extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    scheduledActionName: string;
}
