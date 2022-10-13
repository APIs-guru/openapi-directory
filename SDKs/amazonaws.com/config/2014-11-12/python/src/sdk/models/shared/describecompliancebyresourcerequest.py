from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compliancetype_enum


@dataclass_json
@dataclass
class DescribeComplianceByResourceRequest:
    compliance_types: Optional[List[compliancetype_enum.ComplianceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceTypes' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
