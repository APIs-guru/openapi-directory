import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyReportedTimeRange } from "./anomalyreportedtimerange";
import { AnomalyTimeRange } from "./anomalytimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { AnomalySeverityEnum } from "./anomalyseverityenum";
import { AnomalySourceDetails } from "./anomalysourcedetails";
import { AnomalyStatusEnum } from "./anomalystatusenum";


// ProactiveAnomaly
/** 
 * Information about an anomaly. This object is returned by <code>ListAnomalies</code>.
**/
export class ProactiveAnomaly extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyReportedTimeRange" })
  anomalyReportedTimeRange?: AnomalyReportedTimeRange;

  @Metadata({ data: "json, name=AnomalyTimeRange" })
  anomalyTimeRange?: AnomalyTimeRange;

  @Metadata({ data: "json, name=AssociatedInsightId" })
  associatedInsightId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=PredictionTimeRange" })
  predictionTimeRange?: PredictionTimeRange;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @Metadata({ data: "json, name=Severity" })
  severity?: AnomalySeverityEnum;

  @Metadata({ data: "json, name=SourceDetails" })
  sourceDetails?: AnomalySourceDetails;

  @Metadata({ data: "json, name=Status" })
  status?: AnomalyStatusEnum;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime?: Date;
}
