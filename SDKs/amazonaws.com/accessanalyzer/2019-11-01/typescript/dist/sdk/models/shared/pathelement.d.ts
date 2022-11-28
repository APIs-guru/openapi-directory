import { SpeakeasyBase } from "../../../internal/utils";
import { Substring } from "./substring";
/**
 * A single element in a path through the JSON representation of a policy.
**/
export declare class PathElement extends SpeakeasyBase {
    index?: number;
    key?: string;
    substring?: Substring;
    value?: string;
}
