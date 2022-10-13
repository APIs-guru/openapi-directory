from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deliverystreamencryptionconfigurationinput
from . import deliverystreamtype_enum
from . import elasticsearchdestinationconfiguration
from . import extendeds3destinationconfiguration
from . import httpendpointdestinationconfiguration
from . import kinesisstreamsourceconfiguration
from . import redshiftdestinationconfiguration
from . import s3destinationconfiguration
from . import splunkdestinationconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateDeliveryStreamInput:
    delivery_stream_encryption_configuration_input: Optional[deliverystreamencryptionconfigurationinput.DeliveryStreamEncryptionConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamEncryptionConfigurationInput' }})
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    delivery_stream_type: Optional[deliverystreamtype_enum.DeliveryStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamType' }})
    elasticsearch_destination_configuration: Optional[elasticsearchdestinationconfiguration.ElasticsearchDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticsearchDestinationConfiguration' }})
    extended_s3_destination_configuration: Optional[extendeds3destinationconfiguration.ExtendedS3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedS3DestinationConfiguration' }})
    http_endpoint_destination_configuration: Optional[httpendpointdestinationconfiguration.HTTPEndpointDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpEndpointDestinationConfiguration' }})
    kinesis_stream_source_configuration: Optional[kinesisstreamsourceconfiguration.KinesisStreamSourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamSourceConfiguration' }})
    redshift_destination_configuration: Optional[redshiftdestinationconfiguration.RedshiftDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftDestinationConfiguration' }})
    s3_destination_configuration: Optional[s3destinationconfiguration.S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DestinationConfiguration' }})
    splunk_destination_configuration: Optional[splunkdestinationconfiguration.SplunkDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SplunkDestinationConfiguration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
