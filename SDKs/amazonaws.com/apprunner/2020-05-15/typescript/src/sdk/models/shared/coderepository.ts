import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeConfiguration } from "./codeconfiguration";
import { SourceCodeVersion } from "./sourcecodeversion";


// CodeRepository
/** 
 * Describes a source code repository.
**/
export class CodeRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeConfiguration" })
  codeConfiguration?: CodeConfiguration;

  @Metadata({ data: "json, name=RepositoryUrl" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=SourceCodeVersion" })
  sourceCodeVersion: SourceCodeVersion;
}
