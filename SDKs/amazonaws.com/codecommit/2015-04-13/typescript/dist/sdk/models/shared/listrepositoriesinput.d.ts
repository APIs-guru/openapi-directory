import { SpeakeasyBase } from "../../../internal/utils";
import { OrderEnumEnum } from "./orderenumenum";
import { SortByEnumEnum } from "./sortbyenumenum";
/**
 * Represents the input of a list repositories operation.
**/
export declare class ListRepositoriesInput extends SpeakeasyBase {
    nextToken?: string;
    order?: OrderEnumEnum;
    sortBy?: SortByEnumEnum;
}
