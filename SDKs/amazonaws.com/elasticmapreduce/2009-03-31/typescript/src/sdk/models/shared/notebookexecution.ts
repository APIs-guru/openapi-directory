import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEngineConfig } from "./executionengineconfig";
import { NotebookExecutionStatusEnum } from "./notebookexecutionstatusenum";
import { Tag } from "./tag";



// NotebookExecution
/** 
 * A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.
**/
export class NotebookExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=EditorId" })
  editorId?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExecutionEngine" })
  executionEngine?: ExecutionEngineConfig;

  @SpeakeasyMetadata({ data: "json, name=LastStateChangeReason" })
  lastStateChangeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionId" })
  notebookExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionName" })
  notebookExecutionName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceSecurityGroupId" })
  notebookInstanceSecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookParams" })
  notebookParams?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputNotebookURI" })
  outputNotebookUri?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: NotebookExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
