from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ElasticInferenceAcceleratorAssociation:
    r"""ElasticInferenceAcceleratorAssociation
     Describes the association between an instance and an elastic inference accelerator. 
    """
    
    elastic_inference_accelerator_arn: Optional[str] = field(default=None)
    elastic_inference_accelerator_association_id: Optional[str] = field(default=None)
    elastic_inference_accelerator_association_state: Optional[str] = field(default=None)
    elastic_inference_accelerator_association_time: Optional[datetime] = field(default=None)
    
