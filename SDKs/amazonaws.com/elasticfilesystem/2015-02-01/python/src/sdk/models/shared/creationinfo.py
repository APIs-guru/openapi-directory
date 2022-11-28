from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreationInfo:
    r"""CreationInfo
    <p>Required if the <code>RootDirectory</code> &gt; <code>Path</code> specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code> &gt; <code>Path</code>. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying <code>CreationInfo</code>, you must include values for all properties. </p> <p>Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.</p> <important> <p>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> does not exist, attempts to mount the file system using the access point will fail.</p> </important>
    """
    
    owner_gid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerGid') }})
    owner_uid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerUid') }})
    permissions: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    
