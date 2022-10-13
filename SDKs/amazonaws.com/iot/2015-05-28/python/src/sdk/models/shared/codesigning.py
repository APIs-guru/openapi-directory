from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customcodesigning
from . import startsigningjobparameter


@dataclass_json
@dataclass
class CodeSigning:
    aws_signer_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsSignerJobId' }})
    custom_code_signing: Optional[customcodesigning.CustomCodeSigning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customCodeSigning' }})
    start_signing_job_parameter: Optional[startsigningjobparameter.StartSigningJobParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startSigningJobParameter' }})
    
