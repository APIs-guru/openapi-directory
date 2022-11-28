from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FacetAttributeReference:
    r"""FacetAttributeReference
    The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.
    """
    
    target_attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetAttributeName') }})
    target_facet_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetFacetName') }})
    
