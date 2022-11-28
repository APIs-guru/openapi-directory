from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDomainConfigurationResponse:
    authorizer_config: Optional[AuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerConfig') }})
    domain_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationArn') }})
    domain_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationName') }})
    domain_configuration_status: Optional[DomainConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationStatus') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_type: Optional[DomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainType') }})
    last_status_change_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatusChangeDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_certificates: Optional[List[ServerCertificateSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificates') }})
    service_type: Optional[ServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    
