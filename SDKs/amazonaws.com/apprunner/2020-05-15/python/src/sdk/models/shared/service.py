from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    r"""Service
    <p>Describes an AWS App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html\">CreateService</a>, <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html\">DescribeService</a>, and <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html\">DeleteService</a> actions. A subset of this information is returned by the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html\">ListServices</a> action using the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html\">ServiceSummary</a> type.</p>
    """
    
    auto_scaling_configuration_summary: AutoScalingConfigurationSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationSummary') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_configuration: InstanceConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceConfiguration') }})
    service_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    service_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceId') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    service_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUrl') }})
    source_configuration: SourceConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConfiguration') }})
    status: ServiceStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    health_check_configuration: Optional[HealthCheckConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfiguration') }})
    
