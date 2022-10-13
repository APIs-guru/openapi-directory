from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grpcmetadatamatchmethod


@dataclass_json
@dataclass
class GrpcGatewayRouteMetadata:
    invert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invert' }})
    match: Optional[grpcmetadatamatchmethod.GrpcMetadataMatchMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
