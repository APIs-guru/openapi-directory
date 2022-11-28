from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TypedLinkSpecifier:
    r"""TypedLinkSpecifier
    Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
    """
    
    identity_attribute_values: List[AttributeNameAndValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityAttributeValues') }})
    source_object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObjectReference') }})
    target_object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectReference') }})
    typed_link_facet: TypedLinkSchemaAndFacetName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkFacet') }})
    
