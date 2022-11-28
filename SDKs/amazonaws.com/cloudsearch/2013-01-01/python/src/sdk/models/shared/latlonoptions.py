from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LatLonOptions:
    r"""LatLonOptions
    Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.
    """
    
    default_value: Optional[str] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    search_enabled: Optional[bool] = field(default=None)
    sort_enabled: Optional[bool] = field(default=None)
    source_field: Optional[str] = field(default=None)
    
