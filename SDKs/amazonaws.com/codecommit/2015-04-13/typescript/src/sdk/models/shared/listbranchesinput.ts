import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListBranchesInput
/** 
 * Represents the input of a list branches operation.
**/
export class ListBranchesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
