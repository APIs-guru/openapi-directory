import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEngineConfig } from "./executionengineconfig";
import { Tag } from "./tag";



export class StartNotebookExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EditorId" })
  editorId: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionEngine" })
  executionEngine: ExecutionEngineConfig;

  @SpeakeasyMetadata({ data: "json, name=NotebookExecutionName" })
  notebookExecutionName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceSecurityGroupId" })
  notebookInstanceSecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookParams" })
  notebookParams?: string;

  @SpeakeasyMetadata({ data: "json, name=RelativePath" })
  relativePath: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
