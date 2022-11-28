import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class ListBuildsOutput extends SpeakeasyBase {
    builds?: Build[];
    nextToken?: string;
}
