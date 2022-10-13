from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import outputdataconfig
from . import tag
from . import vpcconfig


@dataclass_json
@dataclass
class StartDocumentClassificationJobRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    document_classifier_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentClassifierArn' }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
