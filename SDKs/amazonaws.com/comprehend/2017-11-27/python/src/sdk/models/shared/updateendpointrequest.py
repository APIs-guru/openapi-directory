from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateEndpointRequest:
    desired_inference_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredInferenceUnits' }})
    endpoint_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    
