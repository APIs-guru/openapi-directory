from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteEnvironmentConfigurationActionEnum(str, Enum):
    DELETE_ENVIRONMENT_CONFIGURATION = "DeleteEnvironmentConfiguration"

class GetDeleteEnvironmentConfigurationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDeleteEnvironmentConfigurationQueryParams:
    action: GetDeleteEnvironmentConfigurationActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    application_name: str = field(metadata={'query_param': { 'field_name': 'ApplicationName', 'style': 'form', 'explode': True }})
    environment_name: str = field(metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    version: GetDeleteEnvironmentConfigurationVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteEnvironmentConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteEnvironmentConfigurationRequest:
    headers: GetDeleteEnvironmentConfigurationHeaders = field()
    query_params: GetDeleteEnvironmentConfigurationQueryParams = field()
    

@dataclass
class GetDeleteEnvironmentConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    
