from dataclasses import dataclass, field
from typing import Enum

class UlimitNameEnum(str, Enum):
    CORE = "core"
    CPU = "cpu"
    DATA = "data"
    FSIZE = "fsize"
    LOCKS = "locks"
    MEMLOCK = "memlock"
    MSGQUEUE = "msgqueue"
    NICE = "nice"
    NOFILE = "nofile"
    NPROC = "nproc"
    RSS = "rss"
    RTPRIO = "rtprio"
    RTTIME = "rttime"
    SIGPENDING = "sigpending"
    STACK = "stack"

