import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecutionSummary } from "./notebookexecutionsummary";
export declare class ListNotebookExecutionsOutput extends SpeakeasyBase {
    marker?: string;
    notebookExecutions?: NotebookExecutionSummary[];
}
