from dataclasses import dataclass, field
from enum import Enum

class ReactionEnum(str, Enum):
    THUMBS_UP = "ThumbsUp"
    THUMBS_DOWN = "ThumbsDown"

