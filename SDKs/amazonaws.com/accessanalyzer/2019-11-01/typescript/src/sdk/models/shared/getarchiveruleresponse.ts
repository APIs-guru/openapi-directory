import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchiveRuleSummary } from "./archiverulesummary";



// GetArchiveRuleResponse
/** 
 * The response to the request.
**/
export class GetArchiveRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveRule" })
  archiveRule: ArchiveRuleSummary;
}
