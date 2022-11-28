from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AssociatedRole:
    r"""AssociatedRole
    Information about the associated IAM roles.
    """
    
    associated_role_arn: Optional[str] = field(default=None)
    certificate_s3_bucket_name: Optional[str] = field(default=None)
    certificate_s3_object_key: Optional[str] = field(default=None)
    encryption_kms_key_id: Optional[str] = field(default=None)
    
