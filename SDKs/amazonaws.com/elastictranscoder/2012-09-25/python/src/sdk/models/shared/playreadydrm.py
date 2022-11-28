from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayReadyDrm:
    r"""PlayReadyDrm
    <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
    """
    
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    initialization_vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitializationVector') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    key_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyMd5') }})
    license_acquisition_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseAcquisitionUrl') }})
    
