from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomDomainConfigType:
    r"""CustomDomainConfigType
    The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
    """
    
    certificate_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    
