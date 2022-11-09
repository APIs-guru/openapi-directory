import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchEventSourceEnum } from "./cloudwatcheventsourceenum";
import { LogFilterEnum } from "./logfilterenum";


// Observation
/** 
 * Describes an anomaly or error with the application.
**/
export class Observation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchEventDetailType" })
  cloudWatchEventDetailType?: string;

  @Metadata({ data: "json, name=CloudWatchEventId" })
  cloudWatchEventId?: string;

  @Metadata({ data: "json, name=CloudWatchEventSource" })
  cloudWatchEventSource?: CloudWatchEventSourceEnum;

  @Metadata({ data: "json, name=CodeDeployApplication" })
  codeDeployApplication?: string;

  @Metadata({ data: "json, name=CodeDeployDeploymentGroup" })
  codeDeployDeploymentGroup?: string;

  @Metadata({ data: "json, name=CodeDeployDeploymentId" })
  codeDeployDeploymentId?: string;

  @Metadata({ data: "json, name=CodeDeployInstanceGroupId" })
  codeDeployInstanceGroupId?: string;

  @Metadata({ data: "json, name=CodeDeployState" })
  codeDeployState?: string;

  @Metadata({ data: "json, name=EbsCause" })
  ebsCause?: string;

  @Metadata({ data: "json, name=EbsEvent" })
  ebsEvent?: string;

  @Metadata({ data: "json, name=EbsRequestId" })
  ebsRequestId?: string;

  @Metadata({ data: "json, name=EbsResult" })
  ebsResult?: string;

  @Metadata({ data: "json, name=Ec2State" })
  ec2State?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=HealthEventArn" })
  healthEventArn?: string;

  @Metadata({ data: "json, name=HealthEventDescription" })
  healthEventDescription?: string;

  @Metadata({ data: "json, name=HealthEventTypeCategory" })
  healthEventTypeCategory?: string;

  @Metadata({ data: "json, name=HealthEventTypeCode" })
  healthEventTypeCode?: string;

  @Metadata({ data: "json, name=HealthService" })
  healthService?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LineTime" })
  lineTime?: Date;

  @Metadata({ data: "json, name=LogFilter" })
  logFilter?: LogFilterEnum;

  @Metadata({ data: "json, name=LogGroup" })
  logGroup?: string;

  @Metadata({ data: "json, name=LogText" })
  logText?: string;

  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=MetricNamespace" })
  metricNamespace?: string;

  @Metadata({ data: "json, name=RdsEventCategories" })
  rdsEventCategories?: string;

  @Metadata({ data: "json, name=RdsEventMessage" })
  rdsEventMessage?: string;

  @Metadata({ data: "json, name=S3EventName" })
  s3EventName?: string;

  @Metadata({ data: "json, name=SourceARN" })
  sourceArn?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=StatesArn" })
  statesArn?: string;

  @Metadata({ data: "json, name=StatesExecutionArn" })
  statesExecutionArn?: string;

  @Metadata({ data: "json, name=StatesInput" })
  statesInput?: string;

  @Metadata({ data: "json, name=StatesStatus" })
  statesStatus?: string;

  @Metadata({ data: "json, name=Unit" })
  unit?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;

  @Metadata({ data: "json, name=XRayErrorPercent" })
  xRayErrorPercent?: number;

  @Metadata({ data: "json, name=XRayFaultPercent" })
  xRayFaultPercent?: number;

  @Metadata({ data: "json, name=XRayNodeName" })
  xRayNodeName?: string;

  @Metadata({ data: "json, name=XRayNodeType" })
  xRayNodeType?: string;

  @Metadata({ data: "json, name=XRayRequestAverageLatency" })
  xRayRequestAverageLatency?: number;

  @Metadata({ data: "json, name=XRayRequestCount" })
  xRayRequestCount?: number;

  @Metadata({ data: "json, name=XRayThrottlePercent" })
  xRayThrottlePercent?: number;
}
