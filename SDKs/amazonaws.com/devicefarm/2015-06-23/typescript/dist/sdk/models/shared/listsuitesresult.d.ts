import { SpeakeasyBase } from "../../../internal/utils";
import { Suite } from "./suite";
/**
 * Represents the result of a list suites request.
**/
export declare class ListSuitesResult extends SpeakeasyBase {
    nextToken?: string;
    suites?: Suite[];
}
