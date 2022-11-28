from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Permission:
    r"""Permission
    Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html\">CreatePermission</a> action, removed with the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html\">DeletePermission</a> action, and listed with the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html\">ListPermissions</a> action.
    """
    
    actions: Optional[List[ActionTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    source_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccount') }})
    
