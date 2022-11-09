import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryNameIdPair } from "./repositorynameidpair";


// ListRepositoriesOutput
/** 
 * Represents the output of a list repositories operation.
**/
export class ListRepositoriesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=repositories", elemType: shared.RepositoryNameIdPair })
  repositories?: RepositoryNameIdPair[];
}
