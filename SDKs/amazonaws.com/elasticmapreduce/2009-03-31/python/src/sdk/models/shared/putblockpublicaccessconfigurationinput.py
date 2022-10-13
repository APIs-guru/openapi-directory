from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import blockpublicaccessconfiguration


@dataclass_json
@dataclass
class PutBlockPublicAccessConfigurationInput:
    block_public_access_configuration: blockpublicaccessconfiguration.BlockPublicAccessConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockPublicAccessConfiguration' }})
    
