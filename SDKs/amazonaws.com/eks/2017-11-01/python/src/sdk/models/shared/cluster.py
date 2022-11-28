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
class Cluster:
    r"""Cluster
    An object representing an Amazon EKS cluster.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    certificate_authority: Optional[Certificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthority') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    connector_config: Optional[ConnectorConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorConfig') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_config: Optional[List[EncryptionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    identity: Optional[Identity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    kubernetes_network_config: Optional[KubernetesNetworkConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesNetworkConfig') }})
    logging: Optional[Logging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    resources_vpc_config: Optional[VpcConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesVpcConfig') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    status: Optional[ClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
