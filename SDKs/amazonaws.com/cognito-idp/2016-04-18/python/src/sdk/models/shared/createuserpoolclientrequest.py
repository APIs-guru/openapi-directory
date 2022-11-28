from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserPoolClientRequest:
    r"""CreateUserPoolClientRequest
    Represents the request to create a user pool client.
    """
    
    client_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientName') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessTokenValidity') }})
    allowed_o_auth_flows: Optional[List[OAuthFlowTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlows') }})
    allowed_o_auth_flows_user_pool_client: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlowsUserPoolClient') }})
    allowed_o_auth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthScopes') }})
    analytics_configuration: Optional[AnalyticsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsConfiguration') }})
    callback_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallbackURLs') }})
    default_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRedirectURI') }})
    enable_token_revocation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableTokenRevocation') }})
    explicit_auth_flows: Optional[List[ExplicitAuthFlowsTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitAuthFlows') }})
    generate_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GenerateSecret') }})
    id_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdTokenValidity') }})
    logout_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogoutURLs') }})
    prevent_user_existence_errors: Optional[PreventUserExistenceErrorTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreventUserExistenceErrors') }})
    read_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadAttributes') }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshTokenValidity') }})
    supported_identity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedIdentityProviders') }})
    token_validity_units: Optional[TokenValidityUnitsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenValidityUnits') }})
    write_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteAttributes') }})
    
