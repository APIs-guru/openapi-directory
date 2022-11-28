import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceRead } from "./workspaceread";



export class WorkspaceReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspaces", elemType: WorkspaceRead })
  workspaces: WorkspaceRead[];
}
