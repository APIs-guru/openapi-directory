from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkGroupConfiguration:
    r"""WorkGroupConfiguration
    The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. 
    """
    
    bytes_scanned_cutoff_per_query: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesScannedCutoffPerQuery') }})
    enforce_work_group_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforceWorkGroupConfiguration') }})
    engine_version: Optional[EngineVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    publish_cloud_watch_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublishCloudWatchMetricsEnabled') }})
    requester_pays_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterPaysEnabled') }})
    result_configuration: Optional[ResultConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultConfiguration') }})
    
