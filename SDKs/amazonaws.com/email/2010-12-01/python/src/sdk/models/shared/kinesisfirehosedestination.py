from dataclasses import dataclass, field



@dataclass
class KinesisFirehoseDestination:
    r"""KinesisFirehoseDestination
    <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    delivery_stream_arn: str = field()
    iam_role_arn: str = field()
    
