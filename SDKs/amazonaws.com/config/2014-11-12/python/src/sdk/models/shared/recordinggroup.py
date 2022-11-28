from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecordingGroup:
    r"""RecordingGroup
    <p>Specifies the types of Amazon Web Services resource for which Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, Config records configuration changes for all supported types of regional resources that Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href=\"https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources\">Supported Resource Types</a>.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html\">Selecting Which Resources Config Records</a>.</p>
    """
    
    all_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allSupported') }})
    include_global_resource_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeGlobalResourceTypes') }})
    resource_types: Optional[List[ResourceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTypes') }})
    
