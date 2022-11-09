import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppsListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultList" })
  defaultList?: boolean;

  @Metadata({ data: "json, name=ListId" })
  listId: string;
}
