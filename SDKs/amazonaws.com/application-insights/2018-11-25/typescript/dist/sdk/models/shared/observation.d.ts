import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchEventSourceEnum } from "./cloudwatcheventsourceenum";
import { LogFilterEnum } from "./logfilterenum";
/**
 * Describes an anomaly or error with the application.
**/
export declare class Observation extends SpeakeasyBase {
    cloudWatchEventDetailType?: string;
    cloudWatchEventId?: string;
    cloudWatchEventSource?: CloudWatchEventSourceEnum;
    codeDeployApplication?: string;
    codeDeployDeploymentGroup?: string;
    codeDeployDeploymentId?: string;
    codeDeployInstanceGroupId?: string;
    codeDeployState?: string;
    ebsCause?: string;
    ebsEvent?: string;
    ebsRequestId?: string;
    ebsResult?: string;
    ec2State?: string;
    endTime?: Date;
    healthEventArn?: string;
    healthEventDescription?: string;
    healthEventTypeCategory?: string;
    healthEventTypeCode?: string;
    healthService?: string;
    id?: string;
    lineTime?: Date;
    logFilter?: LogFilterEnum;
    logGroup?: string;
    logText?: string;
    metricName?: string;
    metricNamespace?: string;
    rdsEventCategories?: string;
    rdsEventMessage?: string;
    s3EventName?: string;
    sourceArn?: string;
    sourceType?: string;
    startTime?: Date;
    statesArn?: string;
    statesExecutionArn?: string;
    statesInput?: string;
    statesStatus?: string;
    unit?: string;
    value?: number;
    xRayErrorPercent?: number;
    xRayFaultPercent?: number;
    xRayNodeName?: string;
    xRayNodeType?: string;
    xRayRequestAverageLatency?: number;
    xRayRequestCount?: number;
    xRayThrottlePercent?: number;
}
