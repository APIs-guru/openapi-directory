from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ProductCode:
    r"""ProductCode
    Describes a product code.
    """
    
    product_code_id: Optional[str] = field(default=None)
    product_code_type: Optional[ProductCodeValuesEnum] = field(default=None)
    
