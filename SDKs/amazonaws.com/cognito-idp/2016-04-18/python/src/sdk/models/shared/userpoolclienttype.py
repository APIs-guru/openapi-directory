from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import oauthflowtype_enum
from . import analyticsconfigurationtype
from . import explicitauthflowstype_enum
from . import preventuserexistenceerrortypes_enum
from . import tokenvalidityunitstype


@dataclass_json
@dataclass
class UserPoolClientType:
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessTokenValidity' }})
    allowed_o_auth_flows: Optional[List[oauthflowtype_enum.OAuthFlowTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedOAuthFlows' }})
    allowed_o_auth_flows_user_pool_client: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedOAuthFlowsUserPoolClient' }})
    allowed_o_auth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedOAuthScopes' }})
    analytics_configuration: Optional[analyticsconfigurationtype.AnalyticsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyticsConfiguration' }})
    callback_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallbackURLs' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientName' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientSecret' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultRedirectURI' }})
    enable_token_revocation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableTokenRevocation' }})
    explicit_auth_flows: Optional[List[explicitauthflowstype_enum.ExplicitAuthFlowsTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExplicitAuthFlows' }})
    id_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdTokenValidity' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logout_ur_ls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogoutURLs' }})
    prevent_user_existence_errors: Optional[preventuserexistenceerrortypes_enum.PreventUserExistenceErrorTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreventUserExistenceErrors' }})
    read_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadAttributes' }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshTokenValidity' }})
    supported_identity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedIdentityProviders' }})
    token_validity_units: Optional[tokenvalidityunitstype.TokenValidityUnitsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenValidityUnits' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    write_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteAttributes' }})
    
