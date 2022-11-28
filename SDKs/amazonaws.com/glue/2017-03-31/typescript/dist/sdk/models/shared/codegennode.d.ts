import { SpeakeasyBase } from "../../../internal/utils";
import { CodeGenNodeArg } from "./codegennodearg";
/**
 * Represents a node in a directed acyclic graph (DAG)
**/
export declare class CodeGenNode extends SpeakeasyBase {
    args: CodeGenNodeArg[];
    id: string;
    lineNumber?: number;
    nodeType: string;
}
