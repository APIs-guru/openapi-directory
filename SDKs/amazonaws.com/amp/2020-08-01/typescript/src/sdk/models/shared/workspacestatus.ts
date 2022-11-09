import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceStatusCodeEnum } from "./workspacestatuscodeenum";


// WorkspaceStatus
/** 
 * Represents the status of a workspace.
**/
export class WorkspaceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=statusCode" })
  statusCode: WorkspaceStatusCodeEnum;
}
