from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatcheventsource_enum
from . import logfilter_enum


@dataclass_json
@dataclass
class Observation:
    cloud_watch_event_detail_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchEventDetailType' }})
    cloud_watch_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchEventId' }})
    cloud_watch_event_source: Optional[cloudwatcheventsource_enum.CloudWatchEventSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchEventSource' }})
    code_deploy_application: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeployApplication' }})
    code_deploy_deployment_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeployDeploymentGroup' }})
    code_deploy_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeployDeploymentId' }})
    code_deploy_instance_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeployInstanceGroupId' }})
    code_deploy_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeployState' }})
    ebs_cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsCause' }})
    ebs_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsEvent' }})
    ebs_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsRequestId' }})
    ebs_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsResult' }})
    ec2_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2State' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    health_event_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthEventArn' }})
    health_event_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthEventDescription' }})
    health_event_type_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthEventTypeCategory' }})
    health_event_type_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthEventTypeCode' }})
    health_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthService' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    line_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    log_filter: Optional[logfilter_enum.LogFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogFilter' }})
    log_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroup' }})
    log_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogText' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    metric_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricNamespace' }})
    rds_event_categories: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RdsEventCategories' }})
    rds_event_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RdsEventMessage' }})
    s3_event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3EventName' }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceARN' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    states_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatesArn' }})
    states_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatesExecutionArn' }})
    states_input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatesInput' }})
    states_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatesStatus' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    x_ray_error_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XRayErrorPercent' }})
    x_ray_fault_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XRayFaultPercent' }})
    x_ray_node_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XRayNodeName' }})
    x_ray_node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XRayNodeType' }})
    x_ray_request_average_latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XRayRequestAverageLatency' }})
    x_ray_request_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XRayRequestCount' }})
    x_ray_throttle_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XRayThrottlePercent' }})
    
