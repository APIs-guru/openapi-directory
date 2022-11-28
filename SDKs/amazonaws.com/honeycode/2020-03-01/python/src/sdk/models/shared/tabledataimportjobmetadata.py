from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableDataImportJobMetadata:
    r"""TableDataImportJobMetadata
    The metadata associated with the table data import job that was submitted.
    """
    
    data_source: ImportDataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    import_options: ImportOptions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOptions') }})
    submit_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    submitter: ImportJobSubmitter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitter') }})
    
