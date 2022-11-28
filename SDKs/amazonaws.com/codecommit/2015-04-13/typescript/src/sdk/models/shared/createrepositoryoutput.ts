import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryMetadata } from "./repositorymetadata";



// CreateRepositoryOutput
/** 
 * Represents the output of a create repository operation.
**/
export class CreateRepositoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryMetadata" })
  repositoryMetadata?: RepositoryMetadata;
}
