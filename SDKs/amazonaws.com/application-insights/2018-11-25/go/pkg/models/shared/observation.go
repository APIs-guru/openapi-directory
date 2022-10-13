package shared

import (
	"time"
)

type Observation struct {
	CloudWatchEventDetailType *string                    `json:"CloudWatchEventDetailType"`
	CloudWatchEventID         *string                    `json:"CloudWatchEventId"`
	CloudWatchEventSource     *CloudWatchEventSourceEnum `json:"CloudWatchEventSource"`
	CodeDeployApplication     *string                    `json:"CodeDeployApplication"`
	CodeDeployDeploymentGroup *string                    `json:"CodeDeployDeploymentGroup"`
	CodeDeployDeploymentID    *string                    `json:"CodeDeployDeploymentId"`
	CodeDeployInstanceGroupID *string                    `json:"CodeDeployInstanceGroupId"`
	CodeDeployState           *string                    `json:"CodeDeployState"`
	EbsCause                  *string                    `json:"EbsCause"`
	EbsEvent                  *string                    `json:"EbsEvent"`
	EbsRequestID              *string                    `json:"EbsRequestId"`
	EbsResult                 *string                    `json:"EbsResult"`
	Ec2State                  *string                    `json:"Ec2State"`
	EndTime                   *time.Time                 `json:"EndTime"`
	HealthEventArn            *string                    `json:"HealthEventArn"`
	HealthEventDescription    *string                    `json:"HealthEventDescription"`
	HealthEventTypeCategory   *string                    `json:"HealthEventTypeCategory"`
	HealthEventTypeCode       *string                    `json:"HealthEventTypeCode"`
	HealthService             *string                    `json:"HealthService"`
	ID                        *string                    `json:"Id"`
	LineTime                  *time.Time                 `json:"LineTime"`
	LogFilter                 *LogFilterEnum             `json:"LogFilter"`
	LogGroup                  *string                    `json:"LogGroup"`
	LogText                   *string                    `json:"LogText"`
	MetricName                *string                    `json:"MetricName"`
	MetricNamespace           *string                    `json:"MetricNamespace"`
	RdsEventCategories        *string                    `json:"RdsEventCategories"`
	RdsEventMessage           *string                    `json:"RdsEventMessage"`
	S3EventName               *string                    `json:"S3EventName"`
	SourceArn                 *string                    `json:"SourceARN"`
	SourceType                *string                    `json:"SourceType"`
	StartTime                 *time.Time                 `json:"StartTime"`
	StatesArn                 *string                    `json:"StatesArn"`
	StatesExecutionArn        *string                    `json:"StatesExecutionArn"`
	StatesInput               *string                    `json:"StatesInput"`
	StatesStatus              *string                    `json:"StatesStatus"`
	Unit                      *string                    `json:"Unit"`
	Value                     *float64                   `json:"Value"`
	XRayErrorPercent          *int64                     `json:"XRayErrorPercent"`
	XRayFaultPercent          *int64                     `json:"XRayFaultPercent"`
	XRayNodeName              *string                    `json:"XRayNodeName"`
	XRayNodeType              *string                    `json:"XRayNodeType"`
	XRayRequestAverageLatency *int64                     `json:"XRayRequestAverageLatency"`
	XRayRequestCount          *int64                     `json:"XRayRequestCount"`
	XRayThrottlePercent       *int64                     `json:"XRayThrottlePercent"`
}
