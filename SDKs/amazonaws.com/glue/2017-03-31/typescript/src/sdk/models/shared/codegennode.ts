import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeGenNodeArg } from "./codegennodearg";


// CodeGenNode
/** 
 * Represents a node in a directed acyclic graph (DAG)
**/
export class CodeGenNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Args", elemType: shared.CodeGenNodeArg })
  args: CodeGenNodeArg[];

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=LineNumber" })
  lineNumber?: number;

  @Metadata({ data: "json, name=NodeType" })
  nodeType: string;
}
