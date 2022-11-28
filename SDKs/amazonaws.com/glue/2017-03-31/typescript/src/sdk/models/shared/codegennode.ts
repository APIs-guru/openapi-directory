import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeGenNodeArg } from "./codegennodearg";



// CodeGenNode
/** 
 * Represents a node in a directed acyclic graph (DAG)
**/
export class CodeGenNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Args", elemType: CodeGenNodeArg })
  args: CodeGenNodeArg[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=LineNumber" })
  lineNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType: string;
}
