from dataclasses import dataclass, field
from enum import Enum

class RouteOriginEnum(str, Enum):
    CREATE_ROUTE_TABLE = "CreateRouteTable"
    CREATE_ROUTE = "CreateRoute"
    ENABLE_VGW_ROUTE_PROPAGATION = "EnableVgwRoutePropagation"

