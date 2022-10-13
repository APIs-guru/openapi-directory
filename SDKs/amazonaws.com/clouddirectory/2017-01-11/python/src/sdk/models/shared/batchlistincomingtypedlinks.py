from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import typedlinkattributerange
from . import typedlinkschemaandfacetname
from . import objectreference


@dataclass_json
@dataclass
class BatchListIncomingTypedLinks:
    filter_attribute_ranges: Optional[List[typedlinkattributerange.TypedLinkAttributeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterAttributeRanges' }})
    filter_typed_link: Optional[typedlinkschemaandfacetname.TypedLinkSchemaAndFacetName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterTypedLink' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    
