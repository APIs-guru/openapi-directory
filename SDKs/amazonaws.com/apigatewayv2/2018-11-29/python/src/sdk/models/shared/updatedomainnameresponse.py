from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainnameconfiguration
from . import mutualtlsauthentication


@dataclass_json
@dataclass
class UpdateDomainNameResponse:
    api_mapping_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiMappingSelectionExpression' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    domain_name_configurations: Optional[List[domainnameconfiguration.DomainNameConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainNameConfigurations' }})
    mutual_tls_authentication: Optional[mutualtlsauthentication.MutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MutualTlsAuthentication' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
