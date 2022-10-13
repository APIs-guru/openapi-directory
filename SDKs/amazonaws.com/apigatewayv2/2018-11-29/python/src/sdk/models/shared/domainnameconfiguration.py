from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import domainnamestatus_enum
from . import endpointtype_enum
from . import securitypolicy_enum


@dataclass_json
@dataclass
class DomainNameConfiguration:
    api_gateway_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiGatewayDomainName' }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateName' }})
    certificate_upload_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateUploadDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name_status: Optional[domainnamestatus_enum.DomainNameStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainNameStatus' }})
    domain_name_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainNameStatusMessage' }})
    endpoint_type: Optional[endpointtype_enum.EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostedZoneId' }})
    ownership_verification_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnershipVerificationCertificateArn' }})
    security_policy: Optional[securitypolicy_enum.SecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityPolicy' }})
    
