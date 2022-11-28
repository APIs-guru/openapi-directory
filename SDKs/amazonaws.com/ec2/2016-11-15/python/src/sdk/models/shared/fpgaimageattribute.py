from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FpgaImageAttribute:
    r"""FpgaImageAttribute
    Describes an Amazon FPGA image (AFI) attribute.
    """
    
    description: Optional[str] = field(default=None)
    fpga_image_id: Optional[str] = field(default=None)
    load_permissions: Optional[List[LoadPermission]] = field(default=None)
    name: Optional[str] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    
