from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportexportconfigtype_enum
from . import s3reportexportconfig


@dataclass_json
@dataclass
class ReportExportConfig:
    export_config_type: Optional[reportexportconfigtype_enum.ReportExportConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportConfigType' }})
    s3_destination: Optional[s3reportexportconfig.S3ReportExportConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Destination' }})
    
