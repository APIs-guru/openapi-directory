import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeConfiguration } from "./codeconfiguration";
import { SourceCodeVersion } from "./sourcecodeversion";



// CodeRepository
/** 
 * Describes a source code repository.
**/
export class CodeRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeConfiguration" })
  codeConfiguration?: CodeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RepositoryUrl" })
  repositoryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=SourceCodeVersion" })
  sourceCodeVersion: SourceCodeVersion;
}
