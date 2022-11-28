from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3BucketRepository:
    r"""S3BucketRepository
     Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files. 
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    details: Optional[S3RepositoryDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    
