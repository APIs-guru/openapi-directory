import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceStatusCodeEnum } from "./workspacestatuscodeenum";



// WorkspaceStatus
/** 
 * Represents the status of a workspace.
**/
export class WorkspaceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: WorkspaceStatusCodeEnum;
}
