from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RedshiftConnectorProfileProperties:
    r"""RedshiftConnectorProfileProperties
     The connector-specific profile properties when using Amazon Redshift. 
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    database_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseUrl') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    
