import { SpeakeasyBase } from "../../../internal/utils";
import { CodeGenEdge } from "./codegenedge";
import { CodeGenNode } from "./codegennode";
export declare class GetDataflowGraphResponse extends SpeakeasyBase {
    dagEdges?: CodeGenEdge[];
    dagNodes?: CodeGenNode[];
}
