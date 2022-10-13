from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import elasticsearchdestinationdescription
from . import extendeds3destinationdescription
from . import httpendpointdestinationdescription
from . import redshiftdestinationdescription
from . import s3destinationdescription
from . import splunkdestinationdescription


@dataclass_json
@dataclass
class DestinationDescription:
    destination_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationId' }})
    elasticsearch_destination_description: Optional[elasticsearchdestinationdescription.ElasticsearchDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticsearchDestinationDescription' }})
    extended_s3_destination_description: Optional[extendeds3destinationdescription.ExtendedS3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedS3DestinationDescription' }})
    http_endpoint_destination_description: Optional[httpendpointdestinationdescription.HTTPEndpointDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpEndpointDestinationDescription' }})
    redshift_destination_description: Optional[redshiftdestinationdescription.RedshiftDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftDestinationDescription' }})
    s3_destination_description: Optional[s3destinationdescription.S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DestinationDescription' }})
    splunk_destination_description: Optional[splunkdestinationdescription.SplunkDestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SplunkDestinationDescription' }})
    
