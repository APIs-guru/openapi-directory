from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDeliveryStreamInput:
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    delivery_stream_encryption_configuration_input: Optional[DeliveryStreamEncryptionConfigurationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamEncryptionConfigurationInput') }})
    delivery_stream_type: Optional[DeliveryStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamType') }})
    elasticsearch_destination_configuration: Optional[ElasticsearchDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchDestinationConfiguration') }})
    extended_s3_destination_configuration: Optional[ExtendedS3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedS3DestinationConfiguration') }})
    http_endpoint_destination_configuration: Optional[HTTPEndpointDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpEndpointDestinationConfiguration') }})
    kinesis_stream_source_configuration: Optional[KinesisStreamSourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamSourceConfiguration') }})
    redshift_destination_configuration: Optional[RedshiftDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDestinationConfiguration') }})
    s3_destination_configuration: Optional[S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationConfiguration') }})
    splunk_destination_configuration: Optional[SplunkDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SplunkDestinationConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
