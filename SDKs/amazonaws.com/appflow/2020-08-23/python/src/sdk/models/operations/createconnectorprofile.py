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
class CreateConnectorProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateConnectorProfileRequestBodyConnectionModeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"


@dataclass_json
@dataclass
class CreateConnectorProfileRequestBodyConnectorProfileConfig:
    r"""CreateConnectorProfileRequestBodyConnectorProfileConfig
     Defines the connector-specific configuration and credentials for the connector profile. 
    """
    
    connector_profile_credentials: Optional[shared.ConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileCredentials') }})
    connector_profile_properties: Optional[shared.ConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileProperties') }})
    
class CreateConnectorProfileRequestBodyConnectorTypeEnum(str, Enum):
    SALESFORCE = "Salesforce"
    SINGULAR = "Singular"
    SLACK = "Slack"
    REDSHIFT = "Redshift"
    S3 = "S3"
    MARKETO = "Marketo"
    GOOGLEANALYTICS = "Googleanalytics"
    ZENDESK = "Zendesk"
    SERVICENOW = "Servicenow"
    DATADOG = "Datadog"
    TRENDMICRO = "Trendmicro"
    SNOWFLAKE = "Snowflake"
    DYNATRACE = "Dynatrace"
    INFORNEXUS = "Infornexus"
    AMPLITUDE = "Amplitude"
    VEEVA = "Veeva"
    EVENT_BRIDGE = "EventBridge"
    LOOKOUT_METRICS = "LookoutMetrics"
    UPSOLVER = "Upsolver"
    HONEYCODE = "Honeycode"
    CUSTOMER_PROFILES = "CustomerProfiles"
    SAPO_DATA = "SAPOData"


@dataclass_json
@dataclass
class CreateConnectorProfileRequestBody:
    connection_mode: CreateConnectorProfileRequestBodyConnectionModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionMode') }})
    connector_profile_config: CreateConnectorProfileRequestBodyConnectorProfileConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileConfig') }})
    connector_profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    connector_type: CreateConnectorProfileRequestBodyConnectorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    kms_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsArn') }})
    

@dataclass
class CreateConnectorProfileRequest:
    headers: CreateConnectorProfileHeaders = field()
    request: CreateConnectorProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectorProfileResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    connector_authentication_exception: Optional[Any] = field(default=None)
    create_connector_profile_response: Optional[shared.CreateConnectorProfileResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
