import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";


// ActiveViolation
/** 
 * Information about an active Device Defender security profile behavior violation.
**/
export class ActiveViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=behavior" })
  behavior?: Behavior;

  @Metadata({ data: "json, name=lastViolationTime" })
  lastViolationTime?: Date;

  @Metadata({ data: "json, name=lastViolationValue" })
  lastViolationValue?: MetricValue;

  @Metadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;

  @Metadata({ data: "json, name=violationEventAdditionalInfo" })
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  @Metadata({ data: "json, name=violationId" })
  violationId?: string;

  @Metadata({ data: "json, name=violationStartTime" })
  violationStartTime?: Date;
}
