from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecretsManagerSecretResourceData:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    additional_staging_labels_to_download: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalStagingLabelsToDownload' }})
    
