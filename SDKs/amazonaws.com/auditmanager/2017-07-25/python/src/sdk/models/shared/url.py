from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class URL:
    r"""URL
     A uniform resource locator, used as a unique identifier to locate a resource on the internet. 
    """
    
    hyperlink_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperlinkName') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
