from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComputeEnvironmentOrder:
    r"""ComputeEnvironmentOrder
    <p>The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>
    """
    
    compute_environment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironment') }})
    order: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    
