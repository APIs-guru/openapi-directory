import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeArtifacts
/** 
 * <p>Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.</p> <ul> <li> <p>Source code artifacts are source code files in a Git repository that are compressed into a .zip file.</p> </li> <li> <p>Build artifacts are .jar or .class files that are compressed in a .zip file.</p> </li> </ul>
**/
export class CodeArtifacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildArtifactsObjectKey" })
  buildArtifactsObjectKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceCodeArtifactsObjectKey" })
  sourceCodeArtifactsObjectKey: string;
}
