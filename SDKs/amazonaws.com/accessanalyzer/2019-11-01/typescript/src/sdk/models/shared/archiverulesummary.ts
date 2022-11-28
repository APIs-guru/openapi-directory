import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Criterion } from "./criterion";



// ArchiveRuleSummary
/** 
 * Contains information about an archive rule.
**/
export class ArchiveRuleSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=filter", elemType: Criterion })
  filter: Map<string, Criterion>;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
