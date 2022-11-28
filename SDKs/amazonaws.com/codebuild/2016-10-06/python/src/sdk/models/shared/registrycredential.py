from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegistryCredential:
    r"""RegistryCredential
    <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href=\"https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html\">Private Registry with Secrets Manager Sample for CodeBuild</a>. </p>
    """
    
    credential: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    credential_provider: CredentialProviderTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialProvider') }})
    
