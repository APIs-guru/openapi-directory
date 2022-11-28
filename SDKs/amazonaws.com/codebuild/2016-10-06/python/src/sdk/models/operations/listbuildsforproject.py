from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListBuildsForProjectQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListBuildsForProjectXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT = "CodeBuild_20161006.ListBuildsForProject"


@dataclass
class ListBuildsForProjectHeaders:
    x_amz_target: ListBuildsForProjectXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBuildsForProjectRequest:
    headers: ListBuildsForProjectHeaders = field()
    query_params: ListBuildsForProjectQueryParams = field()
    request: shared.ListBuildsForProjectInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListBuildsForProjectResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception: Optional[Any] = field(default=None)
    list_builds_for_project_output: Optional[shared.ListBuildsForProjectOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
