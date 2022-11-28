from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegistryAlias:
    r"""RegistryAlias
    An object representing the aliases for a public registry. A public registry is given an alias upon creation but a custom alias can be set using the Amazon ECR console. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html\">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
    """
    
    default_registry_alias: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultRegistryAlias') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_registry_alias: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryRegistryAlias') }})
    status: RegistryAliasStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
