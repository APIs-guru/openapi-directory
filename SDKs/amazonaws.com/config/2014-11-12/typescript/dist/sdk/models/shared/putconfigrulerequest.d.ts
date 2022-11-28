import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigRule } from "./configrule";
import { Tag } from "./tag";
export declare class PutConfigRuleRequest extends SpeakeasyBase {
    configRule: ConfigRule;
    tags?: Tag[];
}
