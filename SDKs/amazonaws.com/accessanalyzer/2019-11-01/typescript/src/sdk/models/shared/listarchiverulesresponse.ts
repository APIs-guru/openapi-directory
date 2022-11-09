import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArchiveRuleSummary } from "./archiverulesummary";


// ListArchiveRulesResponse
/** 
 * The response to the request.
**/
export class ListArchiveRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveRules", elemType: shared.ArchiveRuleSummary })
  archiveRules: ArchiveRuleSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
