from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import domainnamestatus_enum
from . import endpointconfiguration
from . import mutualtlsauthentication
from . import securitypolicy_enum


@dataclass_json
@dataclass
class DomainName:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    certificate_upload_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateUploadDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    distribution_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionDomainName' }})
    distribution_hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionHostedZoneId' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_name_status: Optional[domainnamestatus_enum.DomainNameStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainNameStatus' }})
    domain_name_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainNameStatusMessage' }})
    endpoint_configuration: Optional[endpointconfiguration.EndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointConfiguration' }})
    mutual_tls_authentication: Optional[mutualtlsauthentication.MutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutualTlsAuthentication' }})
    ownership_verification_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownershipVerificationCertificateArn' }})
    regional_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalCertificateArn' }})
    regional_certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalCertificateName' }})
    regional_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalDomainName' }})
    regional_hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalHostedZoneId' }})
    security_policy: Optional[securitypolicy_enum.SecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPolicy' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
