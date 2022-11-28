import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAppsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId: string;
}
