import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryMetadata } from "./repositorymetadata";


// GetRepositoryOutput
/** 
 * Represents the output of a get repository operation.
**/
export class GetRepositoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryMetadata" })
  repositoryMetadata?: RepositoryMetadata;
}
