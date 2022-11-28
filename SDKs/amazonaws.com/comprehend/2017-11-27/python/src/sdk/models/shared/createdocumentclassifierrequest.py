from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDocumentClassifierRequest:
    data_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    document_classifier_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentClassifierName') }})
    input_data_config: DocumentClassifierInputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: LanguageCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    mode: Optional[DocumentClassifierModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    model_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelKmsKeyId') }})
    output_data_config: Optional[DocumentClassifierOutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeKmsKeyId') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
