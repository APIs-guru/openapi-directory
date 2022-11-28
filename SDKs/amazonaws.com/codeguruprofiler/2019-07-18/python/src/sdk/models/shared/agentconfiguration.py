from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AgentConfiguration:
    r"""AgentConfiguration
     The response of <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html\"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data. 
    """
    
    period_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodInSeconds') }})
    should_profile: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shouldProfile') }})
    agent_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentParameters') }})
    
