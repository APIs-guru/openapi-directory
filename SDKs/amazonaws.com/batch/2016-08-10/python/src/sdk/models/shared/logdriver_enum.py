from dataclasses import dataclass, field
from enum import Enum

class LogDriverEnum(str, Enum):
    JSON_FILE = "json-file"
    SYSLOG = "syslog"
    JOURNALD = "journald"
    GELF = "gelf"
    FLUENTD = "fluentd"
    AWSLOGS = "awslogs"
    SPLUNK = "splunk"

