from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificate
from . import connectorconfigresponse
from . import encryptionconfig
from . import identity
from . import kubernetesnetworkconfigresponse
from . import logging
from . import vpcconfigresponse
from . import clusterstatus_enum


@dataclass_json
@dataclass
class Cluster:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    certificate_authority: Optional[certificate.Certificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAuthority' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    connector_config: Optional[connectorconfigresponse.ConnectorConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorConfig' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_config: Optional[List[encryptionconfig.EncryptionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    identity: Optional[identity.Identity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    kubernetes_network_config: Optional[kubernetesnetworkconfigresponse.KubernetesNetworkConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesNetworkConfig' }})
    logging: Optional[logging.Logging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    resources_vpc_config: Optional[vpcconfigresponse.VpcConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesVpcConfig' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    status: Optional[clusterstatus_enum.ClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
