from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LambdaFunctionAssociations:
    r"""LambdaFunctionAssociations
    <p>A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p> <p>If you don't want to invoke any Lambda@Edge functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p>
    """
    
    quantity: int = field()
    items: Optional[List[LambdaFunctionAssociation]] = field(default=None)
    
