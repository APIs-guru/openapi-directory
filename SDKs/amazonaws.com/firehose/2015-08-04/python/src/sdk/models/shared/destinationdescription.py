from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationDescription:
    r"""DestinationDescription
    Describes the destination for a delivery stream.
    """
    
    destination_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationId') }})
    elasticsearch_destination_description: Optional[ElasticsearchDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchDestinationDescription') }})
    extended_s3_destination_description: Optional[ExtendedS3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedS3DestinationDescription') }})
    http_endpoint_destination_description: Optional[HTTPEndpointDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpEndpointDestinationDescription') }})
    redshift_destination_description: Optional[RedshiftDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDestinationDescription') }})
    s3_destination_description: Optional[S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationDescription') }})
    splunk_destination_description: Optional[SplunkDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SplunkDestinationDescription') }})
    
