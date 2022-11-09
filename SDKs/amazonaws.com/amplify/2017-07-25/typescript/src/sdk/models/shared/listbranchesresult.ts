import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Branch } from "./branch";


// ListBranchesResult
/** 
 *  The result structure for the list branches request. 
**/
export class ListBranchesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=branches", elemType: shared.Branch })
  branches: Branch[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
