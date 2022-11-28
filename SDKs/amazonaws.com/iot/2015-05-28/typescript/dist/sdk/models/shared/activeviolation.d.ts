import { SpeakeasyBase } from "../../../internal/utils";
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";
/**
 * Information about an active Device Defender security profile behavior violation.
**/
export declare class ActiveViolation extends SpeakeasyBase {
    behavior?: Behavior;
    lastViolationTime?: Date;
    lastViolationValue?: MetricValue;
    securityProfileName?: string;
    thingName?: string;
    violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
    violationId?: string;
    violationStartTime?: Date;
}
