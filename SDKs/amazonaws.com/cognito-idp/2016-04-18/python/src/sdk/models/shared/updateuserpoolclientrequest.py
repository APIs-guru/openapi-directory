from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateUserPoolClientRequest:
    r"""UpdateUserPoolClientRequest
    Represents the request to update the user pool client.
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessTokenValidity') }})
    allowed_o_auth_flows: Optional[List[OAuthFlowTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlows') }})
    allowed_o_auth_flows_user_pool_client: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlowsUserPoolClient') }})
    allowed_o_auth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthScopes') }})
    analytics_configuration: Optional[AnalyticsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsConfiguration') }})
    callback_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallbackURLs') }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientName') }})
    default_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRedirectURI') }})
    enable_token_revocation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableTokenRevocation') }})
    explicit_auth_flows: Optional[List[ExplicitAuthFlowsTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitAuthFlows') }})
    id_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdTokenValidity') }})
    logout_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogoutURLs') }})
    prevent_user_existence_errors: Optional[PreventUserExistenceErrorTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreventUserExistenceErrors') }})
    read_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadAttributes') }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshTokenValidity') }})
    supported_identity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedIdentityProviders') }})
    token_validity_units: Optional[TokenValidityUnitsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenValidityUnits') }})
    write_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteAttributes') }})
    
