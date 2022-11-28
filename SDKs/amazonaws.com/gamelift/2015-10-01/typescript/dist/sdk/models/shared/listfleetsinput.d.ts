import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class ListFleetsInput extends SpeakeasyBase {
    buildId?: string;
    limit?: number;
    nextToken?: string;
    scriptId?: string;
}
