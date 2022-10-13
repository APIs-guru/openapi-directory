from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import domaindescriptiontype


@dataclass_json
@dataclass
class DescribeUserPoolDomainResponse:
    domain_description: Optional[domaindescriptiontype.DomainDescriptionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainDescription' }})
    
