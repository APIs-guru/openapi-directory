import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Criterion } from "./criterion";


// ArchiveRuleSummary
/** 
 * Contains information about an archive rule.
**/
export class ArchiveRuleSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=filter", elemType: shared.Criterion })
  filter: Map<string, Criterion>;

  @Metadata({ data: "json, name=ruleName" })
  ruleName: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
