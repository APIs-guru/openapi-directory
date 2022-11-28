from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsSessionCredentials:
    r"""AwsSessionCredentials
    Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline.
    """
    
    access_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    secret_access_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    session_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionToken') }})
    
