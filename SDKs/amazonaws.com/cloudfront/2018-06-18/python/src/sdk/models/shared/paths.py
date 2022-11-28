from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class Paths:
    r"""Paths
    A complex type that contains information about the objects that you want to invalidate. For more information, see <a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects\">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. 
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
