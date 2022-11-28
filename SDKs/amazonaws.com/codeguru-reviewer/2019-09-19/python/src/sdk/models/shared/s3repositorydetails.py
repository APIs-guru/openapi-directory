from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3RepositoryDetails:
    r"""S3RepositoryDetails
     Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files. 
    """
    
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    code_artifacts: Optional[CodeArtifacts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeArtifacts') }})
    
