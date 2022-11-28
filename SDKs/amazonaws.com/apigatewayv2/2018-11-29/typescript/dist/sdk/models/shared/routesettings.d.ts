import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";
/**
 * Represents a collection of route settings.
**/
export declare class RouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: boolean;
    detailedMetricsEnabled?: boolean;
    loggingLevel?: LoggingLevelEnum;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
}
