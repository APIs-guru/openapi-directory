from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class FpgaImage:
    r"""FpgaImage
    Describes an Amazon FPGA image (AFI).
    """
    
    create_time: Optional[datetime] = field(default=None)
    data_retention_support: Optional[bool] = field(default=None)
    description: Optional[str] = field(default=None)
    fpga_image_global_id: Optional[str] = field(default=None)
    fpga_image_id: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    owner_alias: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    pci_id: Optional[PciID] = field(default=None)
    product_codes: Optional[List[ProductCode]] = field(default=None)
    public: Optional[bool] = field(default=None)
    shell_version: Optional[str] = field(default=None)
    state: Optional[FpgaImageState] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    update_time: Optional[datetime] = field(default=None)
    
