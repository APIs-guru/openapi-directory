from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RuleCondition:
    r"""RuleCondition
    <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
    """
    
    field: Optional[str] = field(default=None)
    host_header_config: Optional[HostHeaderConditionConfig] = field(default=None)
    http_header_config: Optional[HTTPHeaderConditionConfig] = field(default=None)
    http_request_method_config: Optional[HTTPRequestMethodConditionConfig] = field(default=None)
    path_pattern_config: Optional[PathPatternConditionConfig] = field(default=None)
    query_string_config: Optional[QueryStringConditionConfig] = field(default=None)
    source_ip_config: Optional[SourceIPConditionConfig] = field(default=None)
    values: Optional[List[str]] = field(default=None)
    
