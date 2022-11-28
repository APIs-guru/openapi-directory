import { SpeakeasyBase } from "../../../internal/utils";
import { EventCodeEnum } from "./eventcodeenum";
/**
 * Describes a scheduled event for an instance.
**/
export declare class InstanceStatusEvent extends SpeakeasyBase {
    code?: EventCodeEnum;
    description?: string;
    instanceEventId?: string;
    notAfter?: Date;
    notBefore?: Date;
    notBeforeDeadline?: Date;
}
