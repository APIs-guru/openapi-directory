from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class NetworkInsightsAnalysis:
    r"""NetworkInsightsAnalysis
    Describes a network insights analysis.
    """
    
    alternate_path_hints: Optional[List[AlternatePathHint]] = field(default=None)
    explanations: Optional[List[Explanation]] = field(default=None)
    filter_in_arns: Optional[List[str]] = field(default=None)
    forward_path_components: Optional[List[PathComponent]] = field(default=None)
    network_insights_analysis_arn: Optional[str] = field(default=None)
    network_insights_analysis_id: Optional[str] = field(default=None)
    network_insights_path_id: Optional[str] = field(default=None)
    network_path_found: Optional[bool] = field(default=None)
    return_path_components: Optional[List[PathComponent]] = field(default=None)
    start_date: Optional[datetime] = field(default=None)
    status: Optional[AnalysisStatusEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
