from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import unauthorizedcachecontrolheaderstrategy_enum


@dataclass_json
@dataclass
class MethodSetting:
    cache_data_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheDataEncrypted' }})
    cache_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheTtlInSeconds' }})
    caching_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachingEnabled' }})
    data_trace_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataTraceEnabled' }})
    logging_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingLevel' }})
    metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricsEnabled' }})
    require_authorization_for_cache_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireAuthorizationForCacheControl' }})
    throttling_burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttlingBurstLimit' }})
    throttling_rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttlingRateLimit' }})
    unauthorized_cache_control_header_strategy: Optional[unauthorizedcachecontrolheaderstrategy_enum.UnauthorizedCacheControlHeaderStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unauthorizedCacheControlHeaderStrategy' }})
    
