from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkGroupConfigurationUpdates:
    r"""WorkGroupConfigurationUpdates
    The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
    """
    
    bytes_scanned_cutoff_per_query: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesScannedCutoffPerQuery') }})
    enforce_work_group_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforceWorkGroupConfiguration') }})
    engine_version: Optional[EngineVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    publish_cloud_watch_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublishCloudWatchMetricsEnabled') }})
    remove_bytes_scanned_cutoff_per_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveBytesScannedCutoffPerQuery') }})
    requester_pays_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterPaysEnabled') }})
    result_configuration_updates: Optional[ResultConfigurationUpdates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultConfigurationUpdates') }})
    
