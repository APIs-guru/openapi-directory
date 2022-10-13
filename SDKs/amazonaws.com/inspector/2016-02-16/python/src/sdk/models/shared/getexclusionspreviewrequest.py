from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import locale_enum


@dataclass_json
@dataclass
class GetExclusionsPreviewRequest:
    assessment_template_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentTemplateArn' }})
    locale: Optional[locale_enum.LocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    preview_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewToken' }})
    
