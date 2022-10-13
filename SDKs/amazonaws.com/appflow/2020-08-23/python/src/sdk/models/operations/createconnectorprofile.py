from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateConnectorProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateConnectorProfileRequestBodyConnectionModeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"


@dataclass_json
@dataclass
class CreateConnectorProfileRequestBodyConnectorProfileConfig:
    connector_profile_credentials: Optional[shared.ConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileCredentials' }})
    connector_profile_properties: Optional[shared.ConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileProperties' }})
    
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
    connection_mode: CreateConnectorProfileRequestBodyConnectionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionMode' }})
    connector_profile_config: CreateConnectorProfileRequestBodyConnectorProfileConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileConfig' }})
    connector_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileName' }})
    connector_type: CreateConnectorProfileRequestBodyConnectorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorType' }})
    kms_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsArn' }})
    

@dataclass
class CreateConnectorProfileRequest:
    headers: CreateConnectorProfileHeaders = field(default=None)
    request: CreateConnectorProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectorProfileResponse:
    conflict_exception: Optional[Any] = field(default=None)
    connector_authentication_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_connector_profile_response: Optional[shared.CreateConnectorProfileResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
