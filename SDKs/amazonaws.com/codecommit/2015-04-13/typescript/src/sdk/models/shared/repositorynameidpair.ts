import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryNameIdPair
/** 
 * Information about a repository name and ID.
**/
export class RepositoryNameIdPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryId" })
  repositoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
