from dataclasses import dataclass, field



@dataclass
class PackageTypetoBundlesDeleteQueryParams:
    bundle_id: str = field(default=None, metadata={'query_param': { 'field_name': 'BundleID', 'style': 'form', 'explode': True }})
    package_type_id: str = field(default=None, metadata={'query_param': { 'field_name': 'PackageTypeID', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageTypetoBundlesDeleteRequest:
    query_params: PackageTypetoBundlesDeleteQueryParams = field(default=None)
    

@dataclass
class PackageTypetoBundlesDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
