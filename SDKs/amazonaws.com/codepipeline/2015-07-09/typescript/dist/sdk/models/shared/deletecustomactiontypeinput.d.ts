import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
/**
 * Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
**/
export declare class DeleteCustomActionTypeInput extends SpeakeasyBase {
    category: ActionCategoryEnum;
    provider: string;
    version: string;
}
