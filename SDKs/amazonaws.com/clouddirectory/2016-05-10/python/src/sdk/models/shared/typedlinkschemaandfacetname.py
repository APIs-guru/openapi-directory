from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TypedLinkSchemaAndFacetName:
    r"""TypedLinkSchemaAndFacetName
    Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
    """
    
    schema_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    typed_link_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkName') }})
    
