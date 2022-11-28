from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MethodSetting:
    r"""MethodSetting
    Specifies the method setting properties.
    """
    
    cache_data_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheDataEncrypted') }})
    cache_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheTtlInSeconds') }})
    caching_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachingEnabled') }})
    data_trace_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataTraceEnabled') }})
    logging_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingLevel') }})
    metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsEnabled') }})
    require_authorization_for_cache_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireAuthorizationForCacheControl') }})
    throttling_burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingBurstLimit') }})
    throttling_rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingRateLimit') }})
    unauthorized_cache_control_header_strategy: Optional[UnauthorizedCacheControlHeaderStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unauthorizedCacheControlHeaderStrategy') }})
    
