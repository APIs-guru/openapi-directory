import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryMetadata } from "./repositorymetadata";


// BatchGetRepositoriesOutput
/** 
 * Represents the output of a batch get repositories operation.
**/
export class BatchGetRepositoriesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositories", elemType: shared.RepositoryMetadata })
  repositories?: RepositoryMetadata[];

  @Metadata({ data: "json, name=repositoriesNotFound" })
  repositoriesNotFound?: string[];
}
