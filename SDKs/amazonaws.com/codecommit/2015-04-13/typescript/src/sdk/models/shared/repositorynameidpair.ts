import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepositoryNameIdPair
/** 
 * Information about a repository name and ID.
**/
export class RepositoryNameIdPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryId" })
  repositoryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
