from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HlsContentProtection:
    r"""HlsContentProtection
    The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.
    """
    
    initialization_vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitializationVector') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    key_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyMd5') }})
    key_storage_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyStoragePolicy') }})
    license_acquisition_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseAcquisitionUrl') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Method') }})
    
