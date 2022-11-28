from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CrawlerMetrics:
    r"""CrawlerMetrics
    Metrics for a specified crawler.
    """
    
    crawler_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerName') }})
    last_runtime_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRuntimeSeconds') }})
    median_runtime_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedianRuntimeSeconds') }})
    still_estimating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StillEstimating') }})
    tables_created: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesCreated') }})
    tables_deleted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesDeleted') }})
    tables_updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesUpdated') }})
    time_left_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeLeftSeconds') }})
    
