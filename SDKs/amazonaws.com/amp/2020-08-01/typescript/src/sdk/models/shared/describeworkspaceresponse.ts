import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceDescription } from "./workspacedescription";


// DescribeWorkspaceResponse
/** 
 * Represents the output of a DescribeWorkspace operation.
**/
export class DescribeWorkspaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspace" })
  workspace: WorkspaceDescription;
}
