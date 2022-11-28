import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListBranchesInput
/** 
 * Represents the input of a list branches operation.
**/
export class ListBranchesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
