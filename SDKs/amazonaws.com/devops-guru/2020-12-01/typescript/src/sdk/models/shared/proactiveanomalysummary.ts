import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyReportedTimeRange } from "./anomalyreportedtimerange";
import { AnomalyTimeRange } from "./anomalytimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { AnomalySeverityEnum } from "./anomalyseverityenum";
import { AnomalySourceDetails } from "./anomalysourcedetails";
import { AnomalyStatusEnum } from "./anomalystatusenum";



// ProactiveAnomalySummary
/** 
 * Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code> 
**/
export class ProactiveAnomalySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyReportedTimeRange" })
  anomalyReportedTimeRange?: AnomalyReportedTimeRange;

  @SpeakeasyMetadata({ data: "json, name=AnomalyTimeRange" })
  anomalyTimeRange?: AnomalyTimeRange;

  @SpeakeasyMetadata({ data: "json, name=AssociatedInsightId" })
  associatedInsightId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=PredictionTimeRange" })
  predictionTimeRange?: PredictionTimeRange;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: AnomalySeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceDetails" })
  sourceDetails?: AnomalySourceDetails;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AnomalyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime?: Date;
}
