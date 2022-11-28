import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
export declare class GetActionTypeInput extends SpeakeasyBase {
    category: ActionCategoryEnum;
    owner: string;
    provider: string;
    version: string;
}
