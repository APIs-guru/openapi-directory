from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PciID:
    r"""PciID
    Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
    """
    
    device_id: Optional[str] = field(default=None)
    subsystem_id: Optional[str] = field(default=None)
    subsystem_vendor_id: Optional[str] = field(default=None)
    vendor_id: Optional[str] = field(default=None)
    
