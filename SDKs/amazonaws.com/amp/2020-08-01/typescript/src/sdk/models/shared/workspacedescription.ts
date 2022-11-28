import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceStatus } from "./workspacestatus";



// WorkspaceDescription
/** 
 * Represents the properties of a workspace.
**/
export class WorkspaceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=prometheusEndpoint" })
  prometheusEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: WorkspaceStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
