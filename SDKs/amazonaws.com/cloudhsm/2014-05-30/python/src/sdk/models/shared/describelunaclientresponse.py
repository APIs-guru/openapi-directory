from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeLunaClientResponse:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    certificate_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateFingerprint' }})
    client_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientArn' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    last_modified_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimestamp' }})
    
