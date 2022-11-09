import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InsightTimeRange" })
  insightTimeRange?: InsightTimeRange;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PredictionTimeRange" })
  predictionTimeRange?: PredictionTimeRange;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @Metadata({ data: "json, name=ServiceCollection" })
  serviceCollection?: ServiceCollection;

  @Metadata({ data: "json, name=Severity" })
  severity?: InsightSeverityEnum;

  @Metadata({ data: "json, name=Status" })
  status?: InsightStatusEnum;
}
