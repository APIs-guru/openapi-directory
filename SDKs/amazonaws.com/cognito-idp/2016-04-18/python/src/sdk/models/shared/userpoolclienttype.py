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
class UserPoolClientType:
    r"""UserPoolClientType
    Contains information about a user pool client.
    """
    
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessTokenValidity') }})
    allowed_o_auth_flows: Optional[List[OAuthFlowTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlows') }})
    allowed_o_auth_flows_user_pool_client: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthFlowsUserPoolClient') }})
    allowed_o_auth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOAuthScopes') }})
    analytics_configuration: Optional[AnalyticsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsConfiguration') }})
    callback_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallbackURLs') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientName') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecret') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRedirectURI') }})
    enable_token_revocation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableTokenRevocation') }})
    explicit_auth_flows: Optional[List[ExplicitAuthFlowsTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitAuthFlows') }})
    id_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdTokenValidity') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logout_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogoutURLs') }})
    prevent_user_existence_errors: Optional[PreventUserExistenceErrorTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreventUserExistenceErrors') }})
    read_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadAttributes') }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshTokenValidity') }})
    supported_identity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedIdentityProviders') }})
    token_validity_units: Optional[TokenValidityUnitsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenValidityUnits') }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    write_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteAttributes') }})
    
