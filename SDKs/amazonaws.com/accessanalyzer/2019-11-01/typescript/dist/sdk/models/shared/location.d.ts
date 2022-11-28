import { SpeakeasyBase } from "../../../internal/utils";
import { PathElement } from "./pathelement";
import { Span } from "./span";
/**
 * A location in a policy that is represented as a path through the JSON representation and a corresponding span.
**/
export declare class Location extends SpeakeasyBase {
    path: PathElement[];
    span: Span;
}
