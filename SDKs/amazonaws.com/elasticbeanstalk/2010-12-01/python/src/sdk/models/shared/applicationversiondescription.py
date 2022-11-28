from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ApplicationVersionDescription:
    r"""ApplicationVersionDescription
    Describes the properties of an application version.
    """
    
    application_name: Optional[str] = field(default=None)
    application_version_arn: Optional[str] = field(default=None)
    build_arn: Optional[str] = field(default=None)
    date_created: Optional[datetime] = field(default=None)
    date_updated: Optional[datetime] = field(default=None)
    description: Optional[str] = field(default=None)
    source_build_information: Optional[SourceBuildInformation] = field(default=None)
    source_bundle: Optional[S3Location] = field(default=None)
    status: Optional[ApplicationVersionStatusEnum] = field(default=None)
    version_label: Optional[str] = field(default=None)
    
