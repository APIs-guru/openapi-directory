import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusEnum } from "./taskstatusenum";
/**
 * Contains the parameters for SetTaskStatus.
**/
export declare class SetTaskStatusInput extends SpeakeasyBase {
    errorId?: string;
    errorMessage?: string;
    errorStackTrace?: string;
    taskId: string;
    taskStatus: TaskStatusEnum;
}
