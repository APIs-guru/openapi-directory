import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEngineConfig } from "./executionengineconfig";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";
import { Tag } from "./tag";
/**
 * A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.
**/
export declare class NotebookExecution extends SpeakeasyBase {
    arn?: string;
    editorId?: string;
    endTime?: Date;
    executionEngine?: ExecutionEngineConfig;
    lastStateChangeReason?: string;
    notebookExecutionId?: string;
    notebookExecutionName?: string;
    notebookInstanceSecurityGroupId?: string;
    notebookParams?: string;
    outputNotebookUri?: string;
    startTime?: Date;
    status?: NotebookExecutionStatusEnum;
    tags?: Tag[];
}
