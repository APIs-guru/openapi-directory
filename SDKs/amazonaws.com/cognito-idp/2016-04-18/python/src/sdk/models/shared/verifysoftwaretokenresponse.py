from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import verifysoftwaretokenresponsetype_enum


@dataclass_json
@dataclass
class VerifySoftwareTokenResponse:
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Session' }})
    status: Optional[verifysoftwaretokenresponsetype_enum.VerifySoftwareTokenResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
