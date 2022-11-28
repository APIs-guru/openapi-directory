import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryMetadata } from "./repositorymetadata";



// BatchGetRepositoriesOutput
/** 
 * Represents the output of a batch get repositories operation.
**/
export class BatchGetRepositoriesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: RepositoryMetadata })
  repositories?: RepositoryMetadata[];

  @SpeakeasyMetadata({ data: "json, name=repositoriesNotFound" })
  repositoriesNotFound?: string[];
}
