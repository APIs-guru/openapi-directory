from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hsmstatus_enum
from . import subscriptiontype_enum


@dataclass_json
@dataclass
class DescribeHsmResponse:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    eni_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniId' }})
    eni_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniIp' }})
    hsm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmArn' }})
    hsm_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmType' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    partitions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Partitions' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerialNumber' }})
    server_cert_last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerCertLastUpdated' }})
    server_cert_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerCertUri' }})
    software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SoftwareVersion' }})
    ssh_key_last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshKeyLastUpdated' }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshPublicKey' }})
    status: Optional[hsmstatus_enum.HsmStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    subscription_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionEndDate' }})
    subscription_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionStartDate' }})
    subscription_type: Optional[subscriptiontype_enum.SubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionType' }})
    vendor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VendorName' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
