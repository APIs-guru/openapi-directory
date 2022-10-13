from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domainvalidationoption
from . import certificateoptions
from . import tag
from . import validationmethod_enum


@dataclass_json
@dataclass
class RequestCertificateRequest:
    certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    domain_validation_options: Optional[List[domainvalidationoption.DomainValidationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainValidationOptions' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    options: Optional[certificateoptions.CertificateOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubjectAlternativeNames' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    validation_method: Optional[validationmethod_enum.ValidationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationMethod' }})
    
