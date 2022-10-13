from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authorizerconfig
from . import domainconfigurationstatus_enum
from . import domaintype_enum
from . import servercertificatesummary
from . import servicetype_enum


@dataclass_json
@dataclass
class DescribeDomainConfigurationResponse:
    authorizer_config: Optional[authorizerconfig.AuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerConfig' }})
    domain_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainConfigurationArn' }})
    domain_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainConfigurationName' }})
    domain_configuration_status: Optional[domainconfigurationstatus_enum.DomainConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainConfigurationStatus' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_type: Optional[domaintype_enum.DomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainType' }})
    last_status_change_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatusChangeDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_certificates: Optional[List[servercertificatesummary.ServerCertificateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCertificates' }})
    service_type: Optional[servicetype_enum.ServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    
