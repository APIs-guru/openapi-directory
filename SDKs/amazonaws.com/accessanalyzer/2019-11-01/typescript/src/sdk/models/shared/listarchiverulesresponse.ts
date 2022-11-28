import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchiveRuleSummary } from "./archiverulesummary";



// ListArchiveRulesResponse
/** 
 * The response to the request.
**/
export class ListArchiveRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveRules", elemType: ArchiveRuleSummary })
  archiveRules: ArchiveRuleSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
