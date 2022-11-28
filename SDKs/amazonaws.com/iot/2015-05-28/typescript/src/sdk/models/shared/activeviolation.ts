import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";



// ActiveViolation
/** 
 * Information about an active Device Defender security profile behavior violation.
**/
export class ActiveViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behavior" })
  behavior?: Behavior;

  @SpeakeasyMetadata({ data: "json, name=lastViolationTime" })
  lastViolationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastViolationValue" })
  lastViolationValue?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;

  @SpeakeasyMetadata({ data: "json, name=violationEventAdditionalInfo" })
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  @SpeakeasyMetadata({ data: "json, name=violationId" })
  violationId?: string;

  @SpeakeasyMetadata({ data: "json, name=violationStartTime" })
  violationStartTime?: Date;
}
