import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Branch } from "./branch";



// ListBranchesResult
/** 
 *  The result structure for the list branches request. 
**/
export class ListBranchesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branches", elemType: Branch })
  branches: Branch[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
