package shared

import (
"time")

type Observation struct {
    CloudWatchEventDetailType *string `json:"CloudWatchEventDetailType,omitempty"`
    CloudWatchEventID *string `json:"CloudWatchEventId,omitempty"`
    CloudWatchEventSource *CloudWatchEventSourceEnum `json:"CloudWatchEventSource,omitempty"`
    CodeDeployApplication *string `json:"CodeDeployApplication,omitempty"`
    CodeDeployDeploymentGroup *string `json:"CodeDeployDeploymentGroup,omitempty"`
    CodeDeployDeploymentID *string `json:"CodeDeployDeploymentId,omitempty"`
    CodeDeployInstanceGroupID *string `json:"CodeDeployInstanceGroupId,omitempty"`
    CodeDeployState *string `json:"CodeDeployState,omitempty"`
    EbsCause *string `json:"EbsCause,omitempty"`
    EbsEvent *string `json:"EbsEvent,omitempty"`
    EbsRequestID *string `json:"EbsRequestId,omitempty"`
    EbsResult *string `json:"EbsResult,omitempty"`
    Ec2State *string `json:"Ec2State,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    HealthEventArn *string `json:"HealthEventArn,omitempty"`
    HealthEventDescription *string `json:"HealthEventDescription,omitempty"`
    HealthEventTypeCategory *string `json:"HealthEventTypeCategory,omitempty"`
    HealthEventTypeCode *string `json:"HealthEventTypeCode,omitempty"`
    HealthService *string `json:"HealthService,omitempty"`
    ID *string `json:"Id,omitempty"`
    LineTime *time.Time `json:"LineTime,omitempty"`
    LogFilter *LogFilterEnum `json:"LogFilter,omitempty"`
    LogGroup *string `json:"LogGroup,omitempty"`
    LogText *string `json:"LogText,omitempty"`
    MetricName *string `json:"MetricName,omitempty"`
    MetricNamespace *string `json:"MetricNamespace,omitempty"`
    RdsEventCategories *string `json:"RdsEventCategories,omitempty"`
    RdsEventMessage *string `json:"RdsEventMessage,omitempty"`
    S3EventName *string `json:"S3EventName,omitempty"`
    SourceArn *string `json:"SourceARN,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    StatesArn *string `json:"StatesArn,omitempty"`
    StatesExecutionArn *string `json:"StatesExecutionArn,omitempty"`
    StatesInput *string `json:"StatesInput,omitempty"`
    StatesStatus *string `json:"StatesStatus,omitempty"`
    Unit *string `json:"Unit,omitempty"`
    Value *float64 `json:"Value,omitempty"`
    XRayErrorPercent *int64 `json:"XRayErrorPercent,omitempty"`
    XRayFaultPercent *int64 `json:"XRayFaultPercent,omitempty"`
    XRayNodeName *string `json:"XRayNodeName,omitempty"`
    XRayNodeType *string `json:"XRayNodeType,omitempty"`
    XRayRequestAverageLatency *int64 `json:"XRayRequestAverageLatency,omitempty"`
    XRayRequestCount *int64 `json:"XRayRequestCount,omitempty"`
    XRayThrottlePercent *int64 `json:"XRayThrottlePercent,omitempty"`
    
}

