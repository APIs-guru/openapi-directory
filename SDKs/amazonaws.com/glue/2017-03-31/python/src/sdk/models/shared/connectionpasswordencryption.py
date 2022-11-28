from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectionPasswordEncryption:
    r"""ConnectionPasswordEncryption
    <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p>
    """
    
    return_connection_password_encrypted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnConnectionPasswordEncrypted') }})
    aws_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsKmsKeyId') }})
    
