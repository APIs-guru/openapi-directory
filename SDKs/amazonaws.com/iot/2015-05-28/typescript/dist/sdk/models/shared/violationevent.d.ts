import { SpeakeasyBase } from "../../../internal/utils";
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";
import { ViolationEventTypeEnum } from "./violationeventtypeenum";
/**
 * Information about a Device Defender security profile behavior violation.
**/
export declare class ViolationEvent extends SpeakeasyBase {
    behavior?: Behavior;
    metricValue?: MetricValue;
    securityProfileName?: string;
    thingName?: string;
    violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
    violationEventTime?: Date;
    violationEventType?: ViolationEventTypeEnum;
    violationId?: string;
}
