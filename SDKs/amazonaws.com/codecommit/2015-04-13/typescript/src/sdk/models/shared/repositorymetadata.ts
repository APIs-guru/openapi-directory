import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryMetadata
/** 
 * Information about a repository.
**/
export class RepositoryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=cloneUrlHttp" })
  cloneUrlHttp?: string;

  @SpeakeasyMetadata({ data: "json, name=cloneUrlSsh" })
  cloneUrlSsh?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultBranch" })
  defaultBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=repositoryDescription" })
  repositoryDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryId" })
  repositoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
