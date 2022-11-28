from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SmsConfigurationType:
    r"""SmsConfigurationType
    The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your account. The Cognito User Pool makes the request to the Amazon SNS Service by using an IAM role that you provide for your account.
    """
    
    sns_caller_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsCallerArn') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    
