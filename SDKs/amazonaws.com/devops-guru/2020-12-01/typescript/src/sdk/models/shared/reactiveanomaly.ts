import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AnomalyReportedTimeRange" })
  anomalyReportedTimeRange?: AnomalyReportedTimeRange;

  @SpeakeasyMetadata({ data: "json, name=AnomalyTimeRange" })
  anomalyTimeRange?: AnomalyTimeRange;

  @SpeakeasyMetadata({ data: "json, name=AssociatedInsightId" })
  associatedInsightId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: AnomalySeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceDetails" })
  sourceDetails?: AnomalySourceDetails;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AnomalyStatusEnum;
}
