import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Issue } from "./issue";


// NodegroupHealth
/** 
 * An object representing the health status of the node group.
**/
export class NodegroupHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=issues", elemType: shared.Issue })
  issues?: Issue[];
}
