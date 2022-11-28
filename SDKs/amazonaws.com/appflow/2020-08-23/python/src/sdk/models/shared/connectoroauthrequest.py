from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectorOAuthRequest:
    r"""ConnectorOAuthRequest
     Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. 
    """
    
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authCode') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    
