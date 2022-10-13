from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import outputdataconfig


@dataclass_json
@dataclass
class StartFhirImportJobRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    datastore_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreId' }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobOutputDataConfig' }})
    
