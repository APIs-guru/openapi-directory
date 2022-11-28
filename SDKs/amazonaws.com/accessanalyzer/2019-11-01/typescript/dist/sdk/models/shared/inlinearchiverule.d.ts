import { SpeakeasyBase } from "../../../internal/utils";
import { Criterion } from "./criterion";
/**
 * An criterion statement in an archive rule. Each archive rule may have multiple criteria.
**/
export declare class InlineArchiveRule extends SpeakeasyBase {
    filter: Map<string, Criterion>;
    ruleName: string;
}
