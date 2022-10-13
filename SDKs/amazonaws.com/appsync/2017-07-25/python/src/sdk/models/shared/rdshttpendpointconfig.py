from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RdsHTTPEndpointConfig:
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    aws_secret_store_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsSecretStoreArn' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseName' }})
    db_cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbClusterIdentifier' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
