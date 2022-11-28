from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntityRecognizerAnnotations:
    r"""EntityRecognizerAnnotations
    Describes the annotations associated with a entity recognizer.
    """
    
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
