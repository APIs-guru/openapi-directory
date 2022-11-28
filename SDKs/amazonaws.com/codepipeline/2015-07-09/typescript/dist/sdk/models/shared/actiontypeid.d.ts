import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
import { ActionOwnerEnum } from "./actionownerenum";
/**
 * Represents information about an action type.
**/
export declare class ActionTypeId extends SpeakeasyBase {
    category: ActionCategoryEnum;
    owner: ActionOwnerEnum;
    provider: string;
    version: string;
}
