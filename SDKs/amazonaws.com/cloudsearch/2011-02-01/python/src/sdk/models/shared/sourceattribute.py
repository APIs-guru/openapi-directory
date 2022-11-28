from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SourceAttribute:
    r"""SourceAttribute
    Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
    """
    
    source_data_function: SourceDataFunctionEnum = field()
    source_data_copy: Optional[SourceData] = field(default=None)
    source_data_map: Optional[SourceDataMap] = field(default=None)
    source_data_trim_title: Optional[SourceDataTrimTitle] = field(default=None)
    
