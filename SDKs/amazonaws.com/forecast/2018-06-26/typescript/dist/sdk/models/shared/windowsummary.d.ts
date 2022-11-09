import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { Metrics } from "./metrics";
/**
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
**/
export declare class WindowSummary extends SpeakeasyBase {
    evaluationType?: EvaluationTypeEnum;
    itemCount?: number;
    metrics?: Metrics;
    testWindowEnd?: Date;
    testWindowStart?: Date;
}
