from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorProfile:
    r"""ConnectorProfile
     Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field. 
    """
    
    connection_mode: Optional[ConnectionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionMode') }})
    connector_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileArn') }})
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    connector_profile_properties: Optional[ConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileProperties') }})
    connector_type: Optional[ConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsArn') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    private_connection_provisioning_state: Optional[PrivateConnectionProvisioningState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateConnectionProvisioningState') }})
    
