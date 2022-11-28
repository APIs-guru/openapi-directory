import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteRepositoryOutput
/** 
 * Represents the output of a delete repository operation.
**/
export class DeleteRepositoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryId" })
  repositoryId?: string;
}
