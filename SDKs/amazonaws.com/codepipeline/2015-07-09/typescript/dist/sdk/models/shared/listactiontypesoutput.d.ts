import { SpeakeasyBase } from "../../../internal/utils";
import { ActionType } from "./actiontype";
/**
 * Represents the output of a <code>ListActionTypes</code> action.
**/
export declare class ListActionTypesOutput extends SpeakeasyBase {
    actionTypes: ActionType[];
    nextToken?: string;
}
