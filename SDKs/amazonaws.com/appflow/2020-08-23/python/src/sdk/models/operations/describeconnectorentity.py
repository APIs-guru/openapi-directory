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
class DescribeConnectorEntityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class DescribeConnectorEntityRequestBodyConnectorTypeEnum(str, Enum):
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
class DescribeConnectorEntityRequestBody:
    connector_entity_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorEntityName') }})
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    connector_type: Optional[DescribeConnectorEntityRequestBodyConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    

@dataclass
class DescribeConnectorEntityRequest:
    headers: DescribeConnectorEntityHeaders = field()
    request: DescribeConnectorEntityRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeConnectorEntityResponse:
    content_type: str = field()
    status_code: int = field()
    connector_authentication_exception: Optional[Any] = field(default=None)
    connector_server_exception: Optional[Any] = field(default=None)
    describe_connector_entity_response: Optional[shared.DescribeConnectorEntityResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
