from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Ec2Configuration:
    r"""Ec2Configuration
    <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is currently <code>ECS_AL1</code> (<a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#alami\">Amazon Linux</a>) for non-GPU, non AWSGraviton instances. Starting on March 31, 2021, this default will be changing to <code>ECS_AL2</code> (<a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami\">Amazon Linux 2</a>).</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
    """
    
    image_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageType') }})
    image_id_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageIdOverride') }})
    
