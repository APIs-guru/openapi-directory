from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domainstatus_enum
from . import subdomain


@dataclass_json
@dataclass
class DomainAssociation:
    auto_sub_domain_creation_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoSubDomainCreationPatterns' }})
    auto_sub_domain_iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoSubDomainIAMRole' }})
    certificate_verification_dns_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateVerificationDNSRecord' }})
    domain_association_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainAssociationArn' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_status: domainstatus_enum.DomainStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainStatus' }})
    enable_auto_sub_domain: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoSubDomain' }})
    status_reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    sub_domains: List[subdomain.SubDomain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subDomains' }})
    
