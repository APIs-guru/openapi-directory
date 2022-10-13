from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contentsubmission_shared_businessentities_contentsubmissionattribute
from . import contentsubmission_shared_businessentities_contentdefinition


@dataclass_json
@dataclass
class ContentSubmissionSharedBusinessEntitiesContentSubmission:
    attributes: Optional[List[contentsubmission_shared_businessentities_contentsubmissionattribute.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    content_definition_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentDefinitionID' }})
    content_submission_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentSubmissionID' }})
    definition: Optional[contentsubmission_shared_businessentities_contentdefinition.ContentSubmissionSharedBusinessEntitiesContentDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    job_run_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobRunID' }})
    package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageID' }})
    release_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseNotes' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Repository' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    submission_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmissionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
