from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesContentReleaseVersion:
    content_definition_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentDefinitionID') }, 'form': { 'field_name': 'ContentDefinitionID' }})
    content_release_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentReleaseID') }, 'form': { 'field_name': 'ContentReleaseID' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }, 'form': { 'field_name': 'Deleted' }})
    publisher_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublisherUserID') }, 'form': { 'field_name': 'PublisherUserID' }})
    release_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseID') }, 'form': { 'field_name': 'ReleaseID' }})
    test_report_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestReportUrl') }, 'form': { 'field_name': 'TestReportUrl' }})
    updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'UpdatedDate' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }, 'form': { 'field_name': 'Version' }})
    
