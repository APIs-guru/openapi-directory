from dataclasses import dataclass, field
from enum import Enum

class LanguageTypeEnum(str, Enum):
    JAVA = "JAVA"
    PYTHON = "PYTHON"
    NODE_JS = "NODE_JS"
    RUBY = "RUBY"
    GOLANG = "GOLANG"
    DOCKER = "DOCKER"
    ANDROID = "ANDROID"
    DOTNET = "DOTNET"
    BASE = "BASE"
    PHP = "PHP"

