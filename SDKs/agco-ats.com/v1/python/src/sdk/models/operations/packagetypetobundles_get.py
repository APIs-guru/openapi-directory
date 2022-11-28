from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PackageTypetoBundlesGetQueryParams:
    bundle_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'BundleID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageTypetoBundlesGetRequest:
    query_params: PackageTypetoBundlesGetQueryParams = field()
    

@dataclass
class PackageTypetoBundlesGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_package_type_i_dto_bundle_: Optional[shared.APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle] = field(default=None)
    
