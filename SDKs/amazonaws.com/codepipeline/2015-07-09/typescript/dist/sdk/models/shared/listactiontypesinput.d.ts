import { SpeakeasyBase } from "../../../internal/utils";
import { ActionOwnerEnum } from "./actionownerenum";
/**
 * Represents the input of a <code>ListActionTypes</code> action.
**/
export declare class ListActionTypesInput extends SpeakeasyBase {
    actionOwnerFilter?: ActionOwnerEnum;
    nextToken?: string;
    regionFilter?: string;
}
