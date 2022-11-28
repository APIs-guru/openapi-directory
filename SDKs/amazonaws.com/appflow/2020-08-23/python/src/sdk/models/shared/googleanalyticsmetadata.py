from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsMetadata:
    r"""GoogleAnalyticsMetadata
     The connector metadata specific to Google Analytics. 
    """
    
    o_auth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthScopes') }})
    
