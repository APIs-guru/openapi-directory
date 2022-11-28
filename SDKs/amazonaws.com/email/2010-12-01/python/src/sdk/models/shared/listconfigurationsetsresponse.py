from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListConfigurationSetsResponse:
    r"""ListConfigurationSetsResponse
    A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.
    """
    
    configuration_sets: Optional[List[ConfigurationSet]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
