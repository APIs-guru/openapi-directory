from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class CloudWatchDestination:
    r"""CloudWatchDestination
    <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    dimension_configurations: List[CloudWatchDimensionConfiguration] = field()
    
