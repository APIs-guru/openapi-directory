from dataclasses import dataclass, field



@dataclass
class KinesisStreamConfig:
    r"""KinesisStreamConfig
    Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
    """
    
    role_arn: str = field()
    stream_arn: str = field()
    
