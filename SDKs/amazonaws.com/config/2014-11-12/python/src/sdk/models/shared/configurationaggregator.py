from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountaggregationsource
from . import organizationaggregationsource


@dataclass_json
@dataclass
class ConfigurationAggregator:
    account_aggregation_sources: Optional[List[accountaggregationsource.AccountAggregationSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountAggregationSources' }})
    configuration_aggregator_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorArn' }})
    configuration_aggregator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_aggregation_source: Optional[organizationaggregationsource.OrganizationAggregationSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationAggregationSource' }})
    
