import { SpeakeasyBase } from "../../../internal/utils";
import { Latency } from "./latency";
import { StatusCodes } from "./statuscodes";
/**
 * Application request metrics for an AWS Elastic Beanstalk environment.
**/
export declare class ApplicationMetrics extends SpeakeasyBase {
    duration?: number;
    latency?: Latency;
    requestCount?: number;
    statusCodes?: StatusCodes;
}
