import { SpeakeasyBase } from "../../../internal/utils";
import { ActionType } from "./actiontype";
import { Tag } from "./tag";
/**
 * Represents the output of a <code>CreateCustomActionType</code> operation.
**/
export declare class CreateCustomActionTypeOutput extends SpeakeasyBase {
    actionType: ActionType;
    tags?: Tag[];
}
