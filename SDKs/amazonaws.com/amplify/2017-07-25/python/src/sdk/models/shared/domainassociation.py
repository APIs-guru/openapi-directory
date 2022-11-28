from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainAssociation:
    r"""DomainAssociation
     Describes a domain association that associates a custom domain with an Amplify app. 
    """
    
    domain_association_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainAssociationArn') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_status: DomainStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainStatus') }})
    enable_auto_sub_domain: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoSubDomain') }})
    status_reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    sub_domains: List[SubDomain] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subDomains') }})
    auto_sub_domain_creation_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoSubDomainCreationPatterns') }})
    auto_sub_domain_iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoSubDomainIAMRole') }})
    certificate_verification_dns_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateVerificationDNSRecord') }})
    
