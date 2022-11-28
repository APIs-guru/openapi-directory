from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListTestGridSessionArtifactsQueryParams:
    max_result: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResult', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListTestGridSessionArtifactsXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_LIST_TEST_GRID_SESSION_ARTIFACTS = "DeviceFarm_20150623.ListTestGridSessionArtifacts"


@dataclass
class ListTestGridSessionArtifactsHeaders:
    x_amz_target: ListTestGridSessionArtifactsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTestGridSessionArtifactsRequest:
    headers: ListTestGridSessionArtifactsHeaders = field()
    query_params: ListTestGridSessionArtifactsQueryParams = field()
    request: shared.ListTestGridSessionArtifactsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTestGridSessionArtifactsResponse:
    content_type: str = field()
    status_code: int = field()
    argument_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    list_test_grid_session_artifacts_result: Optional[shared.ListTestGridSessionArtifactsResult] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    
