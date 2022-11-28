import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { StateChangeConfiguration } from "./statechangeconfiguration";
/**
 * Contains information about alarm state changes.
**/
export declare class SystemEvent extends SpeakeasyBase {
    eventType?: EventTypeEnum;
    stateChangeConfiguration?: StateChangeConfiguration;
}
