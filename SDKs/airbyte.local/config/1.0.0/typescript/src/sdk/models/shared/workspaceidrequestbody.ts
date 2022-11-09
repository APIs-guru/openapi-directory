import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkspaceIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
