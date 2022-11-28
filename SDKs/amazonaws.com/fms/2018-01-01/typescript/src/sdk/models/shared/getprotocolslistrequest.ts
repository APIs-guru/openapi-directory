import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProtocolsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultList" })
  defaultList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId: string;
}
