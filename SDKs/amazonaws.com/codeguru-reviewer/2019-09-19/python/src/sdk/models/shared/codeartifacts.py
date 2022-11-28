from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeArtifacts:
    r"""CodeArtifacts
    <p>Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.</p> <ul> <li> <p>Source code artifacts are source code files in a Git repository that are compressed into a .zip file.</p> </li> <li> <p>Build artifacts are .jar or .class files that are compressed in a .zip file.</p> </li> </ul>
    """
    
    source_code_artifacts_object_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceCodeArtifactsObjectKey') }})
    build_artifacts_object_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildArtifactsObjectKey') }})
    
