from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autoscalingconfigurationsummary
from . import encryptionconfiguration
from . import healthcheckconfiguration
from . import instanceconfiguration
from . import sourceconfiguration
from . import servicestatus_enum


@dataclass_json
@dataclass
class Service:
    auto_scaling_configuration_summary: autoscalingconfigurationsummary.AutoScalingConfigurationSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationSummary' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    health_check_configuration: Optional[healthcheckconfiguration.HealthCheckConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckConfiguration' }})
    instance_configuration: instanceconfiguration.InstanceConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceConfiguration' }})
    service_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceArn' }})
    service_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceId' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    service_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUrl' }})
    source_configuration: sourceconfiguration.SourceConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceConfiguration' }})
    status: servicestatus_enum.ServiceStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
