import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";
export declare class ListNotebookExecutionsInput extends SpeakeasyBase {
    editorId?: string;
    from?: Date;
    marker?: string;
    status?: NotebookExecutionStatusEnum;
    to?: Date;
}
