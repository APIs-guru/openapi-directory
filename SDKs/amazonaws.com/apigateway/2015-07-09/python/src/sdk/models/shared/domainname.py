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
class DomainName:
    r"""DomainName
    <p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class=\"Remarks\"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html\">Set a Custom Host Name for an API</a> </div>
    """
    
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    certificate_upload_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateUploadDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    distribution_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionDomainName') }})
    distribution_hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionHostedZoneId') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_name_status: Optional[DomainNameStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNameStatus') }})
    domain_name_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNameStatusMessage') }})
    endpoint_configuration: Optional[EndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfiguration') }})
    mutual_tls_authentication: Optional[MutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutualTlsAuthentication') }})
    ownership_verification_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownershipVerificationCertificateArn') }})
    regional_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalCertificateArn') }})
    regional_certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalCertificateName') }})
    regional_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalDomainName') }})
    regional_hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalHostedZoneId') }})
    security_policy: Optional[SecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPolicy') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
