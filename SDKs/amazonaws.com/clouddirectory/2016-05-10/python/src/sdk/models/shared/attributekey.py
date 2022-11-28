from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttributeKey:
    r"""AttributeKey
    A unique identifier for an attribute.
    """
    
    facet_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FacetName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    schema_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    
