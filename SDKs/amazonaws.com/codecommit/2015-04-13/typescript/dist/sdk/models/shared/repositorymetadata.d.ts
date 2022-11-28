import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a repository.
**/
export declare class RepositoryMetadata extends SpeakeasyBase {
    arn?: string;
    accountId?: string;
    cloneUrlHttp?: string;
    cloneUrlSsh?: string;
    creationDate?: Date;
    defaultBranch?: string;
    lastModifiedDate?: Date;
    repositoryDescription?: string;
    repositoryId?: string;
    repositoryName?: string;
}
