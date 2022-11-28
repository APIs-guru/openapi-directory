import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryMetadata } from "./repositorymetadata";
/**
 * Represents the output of a batch get repositories operation.
**/
export declare class BatchGetRepositoriesOutput extends SpeakeasyBase {
    repositories?: RepositoryMetadata[];
    repositoriesNotFound?: string[];
}
