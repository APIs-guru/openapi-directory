import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveRuleSummary } from "./archiverulesummary";


// GetArchiveRuleResponse
/** 
 * The response to the request.
**/
export class GetArchiveRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveRule" })
  archiveRule: ArchiveRuleSummary;
}
