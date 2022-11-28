import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { Metrics } from "./metrics";



// WindowSummary
/** 
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
**/
export class WindowSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationType" })
  evaluationType?: EvaluationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics?: Metrics;

  @SpeakeasyMetadata({ data: "json, name=TestWindowEnd" })
  testWindowEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=TestWindowStart" })
  testWindowStart?: Date;
}
