import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceDescription } from "./workspacedescription";



// DescribeWorkspaceResponse
/** 
 * Represents the output of a DescribeWorkspace operation.
**/
export class DescribeWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace: WorkspaceDescription;
}
