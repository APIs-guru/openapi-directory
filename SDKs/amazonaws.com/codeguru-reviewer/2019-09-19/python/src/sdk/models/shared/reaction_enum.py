from dataclasses import dataclass, field
from typing import Enum

class ReactionEnum(str, Enum):
    THUMBS_UP = "ThumbsUp"
    THUMBS_DOWN = "ThumbsDown"

