from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import attributenameandvalue
from . import objectreference
from . import objectreference
from . import typedlinkschemaandfacetname


@dataclass_json
@dataclass
class BatchAttachTypedLink:
    attributes: List[attributenameandvalue.AttributeNameAndValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    source_object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceObjectReference' }})
    target_object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetObjectReference' }})
    typed_link_facet: typedlinkschemaandfacetname.TypedLinkSchemaAndFacetName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkFacet' }})
    
