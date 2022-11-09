import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeywordInputTypeEnum } from "./keywordinputtypeenum";


// SourceKeyword
/** 
 *  The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. 
**/
export class SourceKeyword extends SpeakeasyBase {
  @Metadata({ data: "json, name=keywordInputType" })
  keywordInputType?: KeywordInputTypeEnum;

  @Metadata({ data: "json, name=keywordValue" })
  keywordValue?: string;
}
