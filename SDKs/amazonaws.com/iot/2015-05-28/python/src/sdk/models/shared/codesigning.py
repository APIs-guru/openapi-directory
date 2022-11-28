from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeSigning:
    r"""CodeSigning
    Describes the method to use when code signing a file.
    """
    
    aws_signer_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsSignerJobId') }})
    custom_code_signing: Optional[CustomCodeSigning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customCodeSigning') }})
    start_signing_job_parameter: Optional[StartSigningJobParameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startSigningJobParameter') }})
    
