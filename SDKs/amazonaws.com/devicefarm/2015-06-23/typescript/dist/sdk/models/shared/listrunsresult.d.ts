import { SpeakeasyBase } from "../../../internal/utils";
import { Run } from "./run";
/**
 * Represents the result of a list runs request.
**/
export declare class ListRunsResult extends SpeakeasyBase {
    nextToken?: string;
    runs?: Run[];
}
