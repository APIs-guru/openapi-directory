import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Criterion } from "./criterion";


// InlineArchiveRule
/** 
 * An criterion statement in an archive rule. Each archive rule may have multiple criteria.
**/
export class InlineArchiveRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter", elemType: shared.Criterion })
  filter: Map<string, Criterion>;

  @Metadata({ data: "json, name=ruleName" })
  ruleName: string;
}
