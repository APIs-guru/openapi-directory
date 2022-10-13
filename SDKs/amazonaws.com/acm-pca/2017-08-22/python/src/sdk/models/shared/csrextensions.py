from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyusage
from . import accessdescription


@dataclass_json
@dataclass
class CsrExtensions:
    key_usage: Optional[keyusage.KeyUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyUsage' }})
    subject_information_access: Optional[List[accessdescription.AccessDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubjectInformationAccess' }})
    
