import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";
import { ViolationEventTypeEnum } from "./violationeventtypeenum";


// ViolationEvent
/** 
 * Information about a Device Defender security profile behavior violation.
**/
export class ViolationEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=behavior" })
  behavior?: Behavior;

  @Metadata({ data: "json, name=metricValue" })
  metricValue?: MetricValue;

  @Metadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;

  @Metadata({ data: "json, name=violationEventAdditionalInfo" })
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  @Metadata({ data: "json, name=violationEventTime" })
  violationEventTime?: Date;

  @Metadata({ data: "json, name=violationEventType" })
  violationEventType?: ViolationEventTypeEnum;

  @Metadata({ data: "json, name=violationId" })
  violationId?: string;
}
