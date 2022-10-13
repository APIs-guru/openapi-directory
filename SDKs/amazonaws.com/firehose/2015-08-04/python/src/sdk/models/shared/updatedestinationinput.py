from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import elasticsearchdestinationupdate
from . import extendeds3destinationupdate
from . import httpendpointdestinationupdate
from . import redshiftdestinationupdate
from . import s3destinationupdate
from . import splunkdestinationupdate


@dataclass_json
@dataclass
class UpdateDestinationInput:
    current_delivery_stream_version_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentDeliveryStreamVersionId' }})
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    destination_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationId' }})
    elasticsearch_destination_update: Optional[elasticsearchdestinationupdate.ElasticsearchDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticsearchDestinationUpdate' }})
    extended_s3_destination_update: Optional[extendeds3destinationupdate.ExtendedS3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedS3DestinationUpdate' }})
    http_endpoint_destination_update: Optional[httpendpointdestinationupdate.HTTPEndpointDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpEndpointDestinationUpdate' }})
    redshift_destination_update: Optional[redshiftdestinationupdate.RedshiftDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftDestinationUpdate' }})
    s3_destination_update: Optional[s3destinationupdate.S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DestinationUpdate' }})
    splunk_destination_update: Optional[splunkdestinationupdate.SplunkDestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SplunkDestinationUpdate' }})
    
