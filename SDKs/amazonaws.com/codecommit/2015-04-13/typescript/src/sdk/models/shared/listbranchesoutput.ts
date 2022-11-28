import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListBranchesOutput
/** 
 * Represents the output of a list branches operation.
**/
export class ListBranchesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branches" })
  branches?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
