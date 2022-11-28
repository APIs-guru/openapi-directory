from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateVirtualClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateVirtualClusterRequestBodyContainerProvider:
    r"""CreateVirtualClusterRequestBodyContainerProvider
    The information about the container provider.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    info: Optional[shared.ContainerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    type: Optional[shared.ContainerProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateVirtualClusterRequestBody:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    container_provider: CreateVirtualClusterRequestBodyContainerProvider = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerProvider') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateVirtualClusterRequest:
    headers: CreateVirtualClusterHeaders = field()
    request: CreateVirtualClusterRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVirtualClusterResponse:
    content_type: str = field()
    status_code: int = field()
    create_virtual_cluster_response: Optional[shared.CreateVirtualClusterResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
