import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightTimeRange } from "./insighttimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { ServiceCollection } from "./servicecollection";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";



// ProactiveInsightSummary
/** 
 * Details about a proactive insight. This object is returned by <code>DescribeInsight.</code> 
**/
export class ProactiveInsightSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InsightTimeRange" })
  insightTimeRange?: InsightTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictionTimeRange" })
  predictionTimeRange?: PredictionTimeRange;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @SpeakeasyMetadata({ data: "json, name=ServiceCollection" })
  serviceCollection?: ServiceCollection;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: InsightSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InsightStatusEnum;
}
