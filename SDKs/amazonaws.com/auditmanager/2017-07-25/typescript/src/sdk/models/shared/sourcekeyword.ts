import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeywordInputTypeEnum } from "./keywordinputtypeenum";



// SourceKeyword
/** 
 *  The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. 
**/
export class SourceKeyword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keywordInputType" })
  keywordInputType?: KeywordInputTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=keywordValue" })
  keywordValue?: string;
}
