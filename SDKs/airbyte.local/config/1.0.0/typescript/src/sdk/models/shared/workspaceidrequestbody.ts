import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkspaceIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
