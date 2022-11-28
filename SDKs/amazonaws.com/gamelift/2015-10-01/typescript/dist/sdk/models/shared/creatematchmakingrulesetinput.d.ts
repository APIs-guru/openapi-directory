import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Represents the input for a request operation.
**/
export declare class CreateMatchmakingRuleSetInput extends SpeakeasyBase {
    name: string;
    ruleSetBody: string;
    tags?: Tag[];
}
