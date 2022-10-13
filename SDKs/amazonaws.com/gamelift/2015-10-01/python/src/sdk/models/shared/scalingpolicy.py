from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperatortype_enum
from . import metricname_enum
from . import policytype_enum
from . import scalingadjustmenttype_enum
from . import scalingstatustype_enum
from . import targetconfiguration
from . import locationupdatestatus_enum


@dataclass_json
@dataclass
class ScalingPolicy:
    comparison_operator: Optional[comparisonoperatortype_enum.ComparisonOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    evaluation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationPeriods' }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    metric_name: Optional[metricname_enum.MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    policy_type: Optional[policytype_enum.PolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    scaling_adjustment: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingAdjustment' }})
    scaling_adjustment_type: Optional[scalingadjustmenttype_enum.ScalingAdjustmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingAdjustmentType' }})
    status: Optional[scalingstatustype_enum.ScalingStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_configuration: Optional[targetconfiguration.TargetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetConfiguration' }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Threshold' }})
    update_status: Optional[locationupdatestatus_enum.LocationUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateStatus' }})
    
