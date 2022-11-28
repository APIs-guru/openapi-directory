from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnalyticsConfigurationType:
    r"""AnalyticsConfigurationType
    <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region. </p> </note>
    """
    
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationArn') }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    user_data_shared: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDataShared') }})
    
