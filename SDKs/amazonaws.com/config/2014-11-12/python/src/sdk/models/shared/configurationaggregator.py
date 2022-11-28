from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigurationAggregator:
    r"""ConfigurationAggregator
    The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. 
    """
    
    account_aggregation_sources: Optional[List[AccountAggregationSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAggregationSources') }})
    configuration_aggregator_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorArn') }})
    configuration_aggregator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_aggregation_source: Optional[OrganizationAggregationSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationAggregationSource') }})
    
