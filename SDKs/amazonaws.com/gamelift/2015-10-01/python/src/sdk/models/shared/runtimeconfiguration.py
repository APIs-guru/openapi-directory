from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuntimeConfiguration:
    r"""RuntimeConfiguration
    <p>A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration. </p> <p>A GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a>. Learn more about <a href=\"https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html\"> Running Multiple Processes on a Fleet</a>.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeRuntimeConfiguration</a> | <a>UpdateRuntimeConfiguration</a> </p>
    """
    
    game_session_activation_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionActivationTimeoutSeconds') }})
    max_concurrent_game_session_activations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentGameSessionActivations') }})
    server_processes: Optional[List[ServerProcess]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProcesses') }})
    
