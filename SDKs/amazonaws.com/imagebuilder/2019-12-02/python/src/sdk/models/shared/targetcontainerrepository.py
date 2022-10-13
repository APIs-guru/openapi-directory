from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import containerrepositoryservice_enum


@dataclass_json
@dataclass
class TargetContainerRepository:
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    service: containerrepositoryservice_enum.ContainerRepositoryServiceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
