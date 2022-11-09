import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionEngineConfig } from "./executionengineconfig";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";
import { Tag } from "./tag";


// NotebookExecution
/** 
 * A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.
**/
export class NotebookExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=EditorId" })
  editorId?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ExecutionEngine" })
  executionEngine?: ExecutionEngineConfig;

  @Metadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @Metadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId?: string;

  @Metadata({ data: "json, name=NotebookExecutionName" })
  notebookExecutionName?: string;

  @Metadata({ data: "json, name=NotebookInstanceSecurityGroupId" })
  notebookInstanceSecurityGroupId?: string;

  @Metadata({ data: "json, name=NotebookParams" })
  notebookParams?: string;

  @Metadata({ data: "json, name=OutputNotebookURI" })
  outputNotebookUri?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: NotebookExecutionStatusEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
