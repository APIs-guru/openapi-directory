import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceStatus } from "./workspacestatus";



// CreateWorkspaceResponse
/** 
 * Represents the output of a CreateWorkspace operation.
**/
export class CreateWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: WorkspaceStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
