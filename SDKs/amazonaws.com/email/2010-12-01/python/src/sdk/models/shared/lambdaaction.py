from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LambdaAction:
    r"""LambdaAction
    <p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html\">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    function_arn: str = field()
    invocation_type: Optional[InvocationTypeEnum] = field(default=None)
    topic_arn: Optional[str] = field(default=None)
    
