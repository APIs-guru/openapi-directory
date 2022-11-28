from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogConfiguration:
    r"""LogConfiguration
    <p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href=\"https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--log-driver</code> option to <a href=\"https://docs.docker.com/engine/reference/commandline/run/\"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses; however the container may use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information on the options for different supported log drivers, see <a href=\"https://docs.docker.com/engine/admin/logging/overview/\">Configure logging drivers</a> in the Docker documentation.</p> <p>The following should be noted when specifying a log configuration for your containers:</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the valid values below). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html\">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks on Fargate, because you do not have access to the underlying infrastructure your tasks are hosted on, any additional software needed will have to be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul>
    """
    
    log_driver: LogDriverEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDriver') }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret_options: Optional[List[Secret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretOptions') }})
    
