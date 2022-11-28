import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
**/
export declare class Span extends SpeakeasyBase {
    end: Position;
    start: Position;
}
