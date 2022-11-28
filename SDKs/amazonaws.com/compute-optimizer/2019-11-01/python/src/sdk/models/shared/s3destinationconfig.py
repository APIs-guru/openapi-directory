from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3DestinationConfig:
    r"""S3DestinationConfig
    <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href=\"https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html\">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPrefix') }})
    
