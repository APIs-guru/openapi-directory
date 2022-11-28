import { SpeakeasyBase } from "../../../internal/utils";
import { Test } from "./test";
/**
 * Represents the result of a list tests request.
**/
export declare class ListTestsResult extends SpeakeasyBase {
    nextToken?: string;
    tests?: Test[];
}
