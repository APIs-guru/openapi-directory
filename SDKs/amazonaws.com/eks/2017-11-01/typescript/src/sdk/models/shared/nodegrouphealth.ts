import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Issue } from "./issue";



// NodegroupHealth
/** 
 * An object representing the health status of the node group.
**/
export class NodegroupHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issues", elemType: Issue })
  issues?: Issue[];
}
