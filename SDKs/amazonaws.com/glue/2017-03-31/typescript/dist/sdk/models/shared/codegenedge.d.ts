import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a directional edge in a directed acyclic graph (DAG).
**/
export declare class CodeGenEdge extends SpeakeasyBase {
    source: string;
    target: string;
    targetParameter?: string;
}
