from dataclasses import dataclass, field
from enum import Enum

class CapacityReservationInstancePlatformEnum(str, Enum):
    LINUX_UNIX = "Linux/UNIX"
    RED_HAT_ENTERPRISE_LINUX = "Red Hat Enterprise Linux"
    SUSE_LINUX = "SUSE Linux"
    WINDOWS = "Windows"
    WINDOWS_WITH_SQL_SERVER = "Windows with SQL Server"
    WINDOWS_WITH_SQL_SERVER_ENTERPRISE = "Windows with SQL Server Enterprise"
    WINDOWS_WITH_SQL_SERVER_STANDARD = "Windows with SQL Server Standard"
    WINDOWS_WITH_SQL_SERVER_WEB = "Windows with SQL Server Web"
    LINUX_WITH_SQL_SERVER_STANDARD = "Linux with SQL Server Standard"
    LINUX_WITH_SQL_SERVER_WEB = "Linux with SQL Server Web"
    LINUX_WITH_SQL_SERVER_ENTERPRISE = "Linux with SQL Server Enterprise"

