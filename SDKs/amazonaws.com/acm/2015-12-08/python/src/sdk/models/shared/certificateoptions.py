from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateOptions:
    r"""CertificateOptions
    Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency\">Certificate Transparency Logging</a>. 
    """
    
    certificate_transparency_logging_preference: Optional[CertificateTransparencyLoggingPreferenceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateTransparencyLoggingPreference') }})
    
