import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
import { PolicySourceTypeEnum } from "./policysourcetypeenum";
/**
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
**/
export declare class Statement extends SpeakeasyBase {
    endPosition?: Position;
    sourcePolicyId?: string;
    sourcePolicyType?: PolicySourceTypeEnum;
    startPosition?: Position;
}
