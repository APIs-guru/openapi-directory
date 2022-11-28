from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AgentOrchestrationConfig:
    r"""AgentOrchestrationConfig
     Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html\"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
    """
    
    profiling_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingEnabled') }})
    
