import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspaceRead } from "./workspaceread";


export class WorkspaceReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspaces", elemType: shared.WorkspaceRead })
  workspaces: WorkspaceRead[];
}
