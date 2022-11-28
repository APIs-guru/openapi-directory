from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateConnectorDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateConnectorDefinitionRequestBodyInitialVersion:
    r"""CreateConnectorDefinitionRequestBodyInitialVersion
    Information about the connector definition version, which is a container for connectors.
    """
    
    connectors: Optional[List[shared.Connector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connectors') }})
    

@dataclass_json
@dataclass
class CreateConnectorDefinitionRequestBody:
    initial_version: Optional[CreateConnectorDefinitionRequestBodyInitialVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateConnectorDefinitionRequest:
    headers: CreateConnectorDefinitionHeaders = field()
    request: CreateConnectorDefinitionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectorDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_connector_definition_response: Optional[shared.CreateConnectorDefinitionResponse] = field(default=None)
    
