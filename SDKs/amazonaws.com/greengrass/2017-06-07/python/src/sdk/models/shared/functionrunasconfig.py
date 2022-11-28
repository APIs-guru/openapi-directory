from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FunctionRunAsConfig:
    r"""FunctionRunAsConfig
    Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
    """
    
    gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    
