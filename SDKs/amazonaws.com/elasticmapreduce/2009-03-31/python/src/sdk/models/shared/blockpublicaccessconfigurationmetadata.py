from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BlockPublicAccessConfigurationMetadata:
    r"""BlockPublicAccessConfigurationMetadata
    Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.
    """
    
    created_by_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedByArn') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
