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
class CrlConfiguration:
    r"""CrlConfiguration
    <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. Your S3 bucket policy must give write permission to ACM Private CA. </p> <p>ACM Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href=\"https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#crl-encryption\">Encrypting Your CRLs</a>.</p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked. When a certificate is revoked, it is recorded in the next CRL that is generated and in the next audit report. Only time valid certificates are listed in the CRL. Expired certificates are not included.</p> <p>A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, ACM Private CA makes further attempts every 15 minutes.</p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/acm-pca/latest/userguide/crl-planning.html\">Planning a certificate revocation list (CRL)</a> in the <i>AWS Certificate Manager Private Certificate Authority (PCA) User Guide</i> </p>
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    custom_cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomCname') }})
    expiration_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationInDays') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    s3_object_acl: Optional[S3ObjectACLEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ObjectAcl') }})
    
