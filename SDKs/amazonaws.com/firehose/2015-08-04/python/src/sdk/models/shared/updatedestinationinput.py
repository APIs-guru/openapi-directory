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
class UpdateDestinationInput:
    current_delivery_stream_version_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentDeliveryStreamVersionId') }})
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    destination_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationId') }})
    elasticsearch_destination_update: Optional[ElasticsearchDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchDestinationUpdate') }})
    extended_s3_destination_update: Optional[ExtendedS3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedS3DestinationUpdate') }})
    http_endpoint_destination_update: Optional[HTTPEndpointDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpEndpointDestinationUpdate') }})
    redshift_destination_update: Optional[RedshiftDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDestinationUpdate') }})
    s3_destination_update: Optional[S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationUpdate') }})
    splunk_destination_update: Optional[SplunkDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SplunkDestinationUpdate') }})
    
