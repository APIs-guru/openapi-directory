import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryNameIdPair } from "./repositorynameidpair";



// ListRepositoriesOutput
/** 
 * Represents the output of a list repositories operation.
**/
export class ListRepositoriesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: RepositoryNameIdPair })
  repositories?: RepositoryNameIdPair[];
}
