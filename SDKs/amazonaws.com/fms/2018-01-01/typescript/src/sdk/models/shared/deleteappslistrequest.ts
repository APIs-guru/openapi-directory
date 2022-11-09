import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAppsListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ListId" })
  listId: string;
}
