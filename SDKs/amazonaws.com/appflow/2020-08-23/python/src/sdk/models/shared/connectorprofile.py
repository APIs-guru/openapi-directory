from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionmode_enum
from . import connectorprofileproperties
from . import connectortype_enum
from . import privateconnectionprovisioningstate


@dataclass_json
@dataclass
class ConnectorProfile:
    connection_mode: Optional[connectionmode_enum.ConnectionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionMode' }})
    connector_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileArn' }})
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileName' }})
    connector_profile_properties: Optional[connectorprofileproperties.ConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileProperties' }})
    connector_type: Optional[connectortype_enum.ConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorType' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialsArn' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    private_connection_provisioning_state: Optional[privateconnectionprovisioningstate.PrivateConnectionProvisioningState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateConnectionProvisioningState' }})
    
