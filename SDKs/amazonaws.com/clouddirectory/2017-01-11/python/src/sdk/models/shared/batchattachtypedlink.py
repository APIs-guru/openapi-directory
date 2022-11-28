from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAttachTypedLink:
    r"""BatchAttachTypedLink
    Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    attributes: List[AttributeNameAndValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    source_object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObjectReference') }})
    target_object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectReference') }})
    typed_link_facet: TypedLinkSchemaAndFacetName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkFacet') }})
    
