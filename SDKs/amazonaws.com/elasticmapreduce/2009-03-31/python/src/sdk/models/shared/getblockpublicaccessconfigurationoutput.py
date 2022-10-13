from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import blockpublicaccessconfiguration
from . import blockpublicaccessconfigurationmetadata


@dataclass_json
@dataclass
class GetBlockPublicAccessConfigurationOutput:
    block_public_access_configuration: blockpublicaccessconfiguration.BlockPublicAccessConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockPublicAccessConfiguration' }})
    block_public_access_configuration_metadata: blockpublicaccessconfigurationmetadata.BlockPublicAccessConfigurationMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockPublicAccessConfigurationMetadata' }})
    
