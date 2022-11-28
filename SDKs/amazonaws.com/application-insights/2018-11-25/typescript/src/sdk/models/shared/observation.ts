import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEventSourceEnum } from "./cloudwatcheventsourceenum";
import { LogFilterEnum } from "./logfilterenum";



// Observation
/** 
 * Describes an anomaly or error with the application.
**/
export class Observation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchEventDetailType" })
  cloudWatchEventDetailType?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchEventId" })
  cloudWatchEventId?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchEventSource" })
  cloudWatchEventSource?: CloudWatchEventSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=CodeDeployApplication" })
  codeDeployApplication?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeDeployDeploymentGroup" })
  codeDeployDeploymentGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeDeployDeploymentId" })
  codeDeployDeploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeDeployInstanceGroupId" })
  codeDeployInstanceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeDeployState" })
  codeDeployState?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsCause" })
  ebsCause?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsEvent" })
  ebsEvent?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsRequestId" })
  ebsRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsResult" })
  ebsResult?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2State" })
  ec2State?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=HealthEventArn" })
  healthEventArn?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthEventDescription" })
  healthEventDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthEventTypeCategory" })
  healthEventTypeCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthEventTypeCode" })
  healthEventTypeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthService" })
  healthService?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LineTime" })
  lineTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LogFilter" })
  logFilter?: LogFilterEnum;

  @SpeakeasyMetadata({ data: "json, name=LogGroup" })
  logGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=LogText" })
  logText?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricNamespace" })
  metricNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=RdsEventCategories" })
  rdsEventCategories?: string;

  @SpeakeasyMetadata({ data: "json, name=RdsEventMessage" })
  rdsEventMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=S3EventName" })
  s3EventName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceARN" })
  sourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StatesArn" })
  statesArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StatesExecutionArn" })
  statesExecutionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StatesInput" })
  statesInput?: string;

  @SpeakeasyMetadata({ data: "json, name=StatesStatus" })
  statesStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;

  @SpeakeasyMetadata({ data: "json, name=XRayErrorPercent" })
  xRayErrorPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=XRayFaultPercent" })
  xRayFaultPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=XRayNodeName" })
  xRayNodeName?: string;

  @SpeakeasyMetadata({ data: "json, name=XRayNodeType" })
  xRayNodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=XRayRequestAverageLatency" })
  xRayRequestAverageLatency?: number;

  @SpeakeasyMetadata({ data: "json, name=XRayRequestCount" })
  xRayRequestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=XRayThrottlePercent" })
  xRayThrottlePercent?: number;
}
