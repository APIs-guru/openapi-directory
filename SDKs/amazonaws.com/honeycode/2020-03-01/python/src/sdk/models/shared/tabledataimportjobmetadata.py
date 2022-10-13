from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import importdatasource
from . import importoptions
from . import importjobsubmitter


@dataclass_json
@dataclass
class TableDataImportJobMetadata:
    data_source: importdatasource.ImportDataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    import_options: importoptions.ImportOptions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importOptions' }})
    submit_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    submitter: importjobsubmitter.ImportJobSubmitter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitter' }})
    
