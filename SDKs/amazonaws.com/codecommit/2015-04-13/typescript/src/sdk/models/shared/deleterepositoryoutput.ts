import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteRepositoryOutput
/** 
 * Represents the output of a delete repository operation.
**/
export class DeleteRepositoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryId" })
  repositoryId?: string;
}
