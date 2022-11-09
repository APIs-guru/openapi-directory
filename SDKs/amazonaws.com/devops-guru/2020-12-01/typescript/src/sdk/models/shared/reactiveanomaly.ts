import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyReportedTimeRange } from "./anomalyreportedtimerange";
import { AnomalyTimeRange } from "./anomalytimerange";
import { ResourceCollection } from "./resourcecollection";
import { AnomalySeverityEnum } from "./anomalyseverityenum";
import { AnomalySourceDetails } from "./anomalysourcedetails";
import { AnomalyStatusEnum } from "./anomalystatusenum";


// ReactiveAnomaly
/** 
 * Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>.
**/
export class ReactiveAnomaly extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyReportedTimeRange" })
  anomalyReportedTimeRange?: AnomalyReportedTimeRange;

  @Metadata({ data: "json, name=AnomalyTimeRange" })
  anomalyTimeRange?: AnomalyTimeRange;

  @Metadata({ data: "json, name=AssociatedInsightId" })
  associatedInsightId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @Metadata({ data: "json, name=Severity" })
  severity?: AnomalySeverityEnum;

  @Metadata({ data: "json, name=SourceDetails" })
  sourceDetails?: AnomalySourceDetails;

  @Metadata({ data: "json, name=Status" })
  status?: AnomalyStatusEnum;
}
