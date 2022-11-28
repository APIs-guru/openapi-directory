from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LaunchTemplateSpecification:
    r"""LaunchTemplateSpecification
    <p>An object representing a node group launch template specification. The launch template cannot include <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html\"> <code>SubnetId</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html\"> <code>IamInstanceProfile</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html\"> <code>RequestSpotInstances</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html\"> <code>HibernationOptions</code> </a>, or <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html\"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html\"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html\">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
