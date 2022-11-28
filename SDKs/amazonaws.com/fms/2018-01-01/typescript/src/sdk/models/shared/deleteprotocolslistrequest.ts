import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProtocolsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId: string;
}
