from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class EventDestination:
    r"""EventDestination
    <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    matching_event_types: List[EventTypeEnum] = field()
    name: str = field()
    cloud_watch_destination: Optional[CloudWatchDestination] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    kinesis_firehose_destination: Optional[KinesisFirehoseDestination] = field(default=None)
    sns_destination: Optional[SnsDestination] = field(default=None)
    
