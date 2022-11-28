import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
/**
 * Specifies the category, owner, provider, and version of the action type.
**/
export declare class ActionTypeIdentifier extends SpeakeasyBase {
    category: ActionCategoryEnum;
    owner: string;
    provider: string;
    version: string;
}
