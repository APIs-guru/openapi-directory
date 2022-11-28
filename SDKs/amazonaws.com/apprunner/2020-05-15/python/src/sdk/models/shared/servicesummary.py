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
class ServiceSummary:
    r"""ServiceSummary
    <p>Provides summary information for an AWS App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html\">ListServices</a> action. Complete service information is returned by the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html\">CreateService</a>, <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html\">DescribeService</a>, and <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html\">DeleteService</a> actions using the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html\">Service</a> type.</p>
    """
    
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceId') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    service_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUrl') }})
    status: Optional[ServiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
