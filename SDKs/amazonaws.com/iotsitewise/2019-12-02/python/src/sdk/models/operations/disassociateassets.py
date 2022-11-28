from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DisassociateAssetsPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateAssetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DisassociateAssetsRequestBody:
    child_asset_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childAssetId') }})
    hierarchy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyId') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    

@dataclass
class DisassociateAssetsRequest:
    headers: DisassociateAssetsHeaders = field()
    path_params: DisassociateAssetsPathParams = field()
    request: DisassociateAssetsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateAssetsResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_operation_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
