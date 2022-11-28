import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";
/**
 * Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution.
**/
export declare class NotebookExecutionSummary extends SpeakeasyBase {
    editorId?: string;
    endTime?: Date;
    notebookExecutionId?: string;
    notebookExecutionName?: string;
    startTime?: Date;
    status?: NotebookExecutionStatusEnum;
}
