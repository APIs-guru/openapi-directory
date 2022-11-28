import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultList" })
  defaultList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId: string;
}
