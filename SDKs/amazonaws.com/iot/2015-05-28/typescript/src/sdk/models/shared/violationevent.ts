import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";
import { ViolationEventTypeEnum } from "./violationeventtypeenum";



// ViolationEvent
/** 
 * Information about a Device Defender security profile behavior violation.
**/
export class ViolationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behavior" })
  behavior?: Behavior;

  @SpeakeasyMetadata({ data: "json, name=metricValue" })
  metricValue?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;

  @SpeakeasyMetadata({ data: "json, name=violationEventAdditionalInfo" })
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  @SpeakeasyMetadata({ data: "json, name=violationEventTime" })
  violationEventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=violationEventType" })
  violationEventType?: ViolationEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=violationId" })
  violationId?: string;
}
