from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class SourceBuildInformation:
    r"""SourceBuildInformation
    Location of the source code for an application version.
    """
    
    source_location: str = field()
    source_repository: SourceRepositoryEnum = field()
    source_type: SourceTypeEnum = field()
    
