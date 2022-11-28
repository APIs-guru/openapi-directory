from dataclasses import dataclass, field
from enum import Enum

class TriggerTypeEnum(str, Enum):
    CREATE_PIPELINE = "CreatePipeline"
    START_PIPELINE_EXECUTION = "StartPipelineExecution"
    POLL_FOR_SOURCE_CHANGES = "PollForSourceChanges"
    WEBHOOK = "Webhook"
    CLOUD_WATCH_EVENT = "CloudWatchEvent"
    PUT_ACTION_REVISION = "PutActionRevision"

