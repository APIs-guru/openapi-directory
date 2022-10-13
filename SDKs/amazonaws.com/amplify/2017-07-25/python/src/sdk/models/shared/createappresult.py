from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import app


@dataclass_json
@dataclass
class CreateAppResult:
    app: app.App = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    
