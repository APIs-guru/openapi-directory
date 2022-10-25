from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PriorityPackagesPostPriorityPackagesRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_priority_package: Optional[shared.UpdateSystemModelsPriorityPackage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_priority_package1: Optional[shared.UpdateSystemModelsPriorityPackage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_priority_package2: Optional[shared.UpdateSystemModelsPriorityPackage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PriorityPackagesPostPriorityPackagesRequest:
    request: PriorityPackagesPostPriorityPackagesRequests = field(default=None)
    

@dataclass
class PriorityPackagesPostPriorityPackagesResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    priority_packages_post_priority_packages_200_application_json_string: Optional[str] = field(default=None)
    priority_packages_post_priority_packages_200_application_xml_string: Optional[str] = field(default=None)
    priority_packages_post_priority_packages_200_text_json_string: Optional[str] = field(default=None)
    priority_packages_post_priority_packages_200_text_xml_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
