from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppSpecContent:
    r"""AppSpecContent
     A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. 
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256') }})
    
