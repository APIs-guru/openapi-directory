import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordInputTypeEnum } from "./keywordinputtypeenum";
/**
 *  The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names.
**/
export declare class SourceKeyword extends SpeakeasyBase {
    keywordInputType?: KeywordInputTypeEnum;
    keywordValue?: string;
}
