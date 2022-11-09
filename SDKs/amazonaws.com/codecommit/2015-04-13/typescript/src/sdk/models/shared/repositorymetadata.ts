import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepositoryMetadata
/** 
 * Information about a repository.
**/
export class RepositoryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=cloneUrlHttp" })
  cloneUrlHttp?: string;

  @Metadata({ data: "json, name=cloneUrlSsh" })
  cloneUrlSsh?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=defaultBranch" })
  defaultBranch?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=repositoryDescription" })
  repositoryDescription?: string;

  @Metadata({ data: "json, name=repositoryId" })
  repositoryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
