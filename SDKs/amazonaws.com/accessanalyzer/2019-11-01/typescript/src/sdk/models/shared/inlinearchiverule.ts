import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Criterion } from "./criterion";



// InlineArchiveRule
/** 
 * An criterion statement in an archive rule. Each archive rule may have multiple criteria.
**/
export class InlineArchiveRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter", elemType: Criterion })
  filter: Map<string, Criterion>;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName: string;
}
