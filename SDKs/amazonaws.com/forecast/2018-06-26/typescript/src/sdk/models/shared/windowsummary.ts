import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { Metrics } from "./metrics";


// WindowSummary
/** 
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
**/
export class WindowSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationType" })
  evaluationType?: EvaluationTypeEnum;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=Metrics" })
  metrics?: Metrics;

  @Metadata({ data: "json, name=TestWindowEnd" })
  testWindowEnd?: Date;

  @Metadata({ data: "json, name=TestWindowStart" })
  testWindowStart?: Date;
}
