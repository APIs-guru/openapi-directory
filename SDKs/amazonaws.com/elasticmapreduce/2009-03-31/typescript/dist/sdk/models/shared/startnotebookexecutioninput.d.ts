import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEngineConfig } from "./executionengineconfig";
import { Tag } from "./tag";
export declare class StartNotebookExecutionInput extends SpeakeasyBase {
    editorId: string;
    executionEngine: ExecutionEngineConfig;
    notebookExecutionName?: string;
    notebookInstanceSecurityGroupId?: string;
    notebookParams?: string;
    relativePath: string;
    serviceRole: string;
    tags?: Tag[];
}
