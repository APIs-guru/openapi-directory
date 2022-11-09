import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionEngineConfig } from "./executionengineconfig";
import { Tag } from "./tag";


export class StartNotebookExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EditorId" })
  editorId: string;

  @Metadata({ data: "json, name=ExecutionEngine" })
  executionEngine: ExecutionEngineConfig;

  @Metadata({ data: "json, name=NotebookExecutionName" })
  notebookExecutionName?: string;

  @Metadata({ data: "json, name=NotebookInstanceSecurityGroupId" })
  notebookInstanceSecurityGroupId?: string;

  @Metadata({ data: "json, name=NotebookParams" })
  notebookParams?: string;

  @Metadata({ data: "json, name=RelativePath" })
  relativePath: string;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
