from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeConfigurationSetResponse:
    r"""DescribeConfigurationSetResponse
    Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.
    """
    
    configuration_set: Optional[ConfigurationSet] = field(default=None)
    delivery_options: Optional[DeliveryOptions] = field(default=None)
    event_destinations: Optional[List[EventDestination]] = field(default=None)
    reputation_options: Optional[ReputationOptions] = field(default=None)
    tracking_options: Optional[TrackingOptions] = field(default=None)
    
