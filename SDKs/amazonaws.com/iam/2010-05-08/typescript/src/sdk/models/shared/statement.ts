import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
import { PolicySourceTypeEnum } from "./policysourcetypeenum";



// Statement
/** 
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
**/
export class Statement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endPosition?: Position;

  @SpeakeasyMetadata()
  sourcePolicyId?: string;

  @SpeakeasyMetadata()
  sourcePolicyType?: PolicySourceTypeEnum;

  @SpeakeasyMetadata()
  startPosition?: Position;
}
