from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateDescription:
    r"""CertificateDescription
    Describes a certificate.
    """
    
    ca_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateId') }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    certificate_mode: Optional[CertificateModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateMode') }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePem') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerVersion') }})
    generation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generationId') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownedBy') }})
    previous_owned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousOwnedBy') }})
    status: Optional[CertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transfer_data: Optional[TransferData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferData') }})
    validity: Optional[CertificateValidity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    
