from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
    """
    
    s3_config: S3Config = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Config') }})
    
