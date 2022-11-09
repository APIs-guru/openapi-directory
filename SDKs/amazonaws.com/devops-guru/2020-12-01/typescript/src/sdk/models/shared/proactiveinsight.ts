import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightTimeRange } from "./insighttimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";


// ProactiveInsight
/** 
 * Details about a proactive insight. This object is returned by <code>ListInsights</code>.
**/
export class ProactiveInsight extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=Severity" })
  severity?: InsightSeverityEnum;

  @Metadata({ data: "json, name=SsmOpsItemId" })
  ssmOpsItemId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: InsightStatusEnum;
}
