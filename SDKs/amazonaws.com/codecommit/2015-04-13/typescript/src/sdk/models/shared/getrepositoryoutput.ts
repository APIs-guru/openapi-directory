import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryMetadata } from "./repositorymetadata";



// GetRepositoryOutput
/** 
 * Represents the output of a get repository operation.
**/
export class GetRepositoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryMetadata" })
  repositoryMetadata?: RepositoryMetadata;
}
