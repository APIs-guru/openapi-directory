import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightTimeRange } from "./insighttimerange";
import { ResourceCollection } from "./resourcecollection";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";



// ReactiveInsight
/** 
 *  Information about a reactive insight. This object is returned by <code>ListInsights</code>. 
**/
export class ReactiveInsight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InsightTimeRange" })
  insightTimeRange?: InsightTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: InsightSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=SsmOpsItemId" })
  ssmOpsItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InsightStatusEnum;
}
