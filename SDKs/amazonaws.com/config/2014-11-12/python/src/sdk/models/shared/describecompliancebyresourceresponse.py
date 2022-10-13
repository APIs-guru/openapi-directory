from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compliancebyresource


@dataclass_json
@dataclass
class DescribeComplianceByResourceResponse:
    compliance_by_resources: Optional[List[compliancebyresource.ComplianceByResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceByResources' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
