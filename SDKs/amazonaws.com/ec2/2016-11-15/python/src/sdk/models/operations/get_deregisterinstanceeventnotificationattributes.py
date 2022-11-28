from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDeregisterInstanceEventNotificationAttributesActionEnum(str, Enum):
    DEREGISTER_INSTANCE_EVENT_NOTIFICATION_ATTRIBUTES = "DeregisterInstanceEventNotificationAttributes"


@dataclass
class GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute:
    r"""GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute
    Information about the tag keys to deregister for the current Region. You can either specify individual tag keys or deregister all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
    """
    
    include_all_tags_of_instance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IncludeAllTagsOfInstance' }})
    instance_tag_keys: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceTagKeys' }})
    
class GetDeregisterInstanceEventNotificationAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeregisterInstanceEventNotificationAttributesQueryParams:
    action: GetDeregisterInstanceEventNotificationAttributesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDeregisterInstanceEventNotificationAttributesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    instance_tag_attribute: Optional[GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceTagAttribute', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeregisterInstanceEventNotificationAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeregisterInstanceEventNotificationAttributesRequest:
    headers: GetDeregisterInstanceEventNotificationAttributesHeaders = field()
    query_params: GetDeregisterInstanceEventNotificationAttributesQueryParams = field()
    

@dataclass
class GetDeregisterInstanceEventNotificationAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
