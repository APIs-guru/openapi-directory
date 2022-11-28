from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaExecutorConfiguration:
    r"""LambdaExecutorConfiguration
    Details about the configuration for the <code>Lambda</code> action engine, or executor.
    """
    
    lambda_function_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionArn') }})
    
