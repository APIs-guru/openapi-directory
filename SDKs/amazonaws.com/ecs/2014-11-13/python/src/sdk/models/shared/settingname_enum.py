from dataclasses import dataclass, field
from enum import Enum

class SettingNameEnum(str, Enum):
    SERVICE_LONG_ARN_FORMAT = "serviceLongArnFormat"
    TASK_LONG_ARN_FORMAT = "taskLongArnFormat"
    CONTAINER_INSTANCE_LONG_ARN_FORMAT = "containerInstanceLongArnFormat"
    AWSVPC_TRUNKING = "awsvpcTrunking"
    CONTAINER_INSIGHTS = "containerInsights"

