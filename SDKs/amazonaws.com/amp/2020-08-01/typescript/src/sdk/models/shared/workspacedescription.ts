import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceStatus } from "./workspacestatus";


// WorkspaceDescription
/** 
 * Represents the properties of a workspace.
**/
export class WorkspaceDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=prometheusEndpoint" })
  prometheusEndpoint?: string;

  @Metadata({ data: "json, name=status" })
  status: WorkspaceStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
