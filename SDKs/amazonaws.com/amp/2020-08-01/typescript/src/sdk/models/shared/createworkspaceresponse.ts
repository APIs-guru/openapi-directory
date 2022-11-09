import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceStatus } from "./workspacestatus";


// CreateWorkspaceResponse
/** 
 * Represents the output of a CreateWorkspace operation.
**/
export class CreateWorkspaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=status" })
  status: WorkspaceStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
