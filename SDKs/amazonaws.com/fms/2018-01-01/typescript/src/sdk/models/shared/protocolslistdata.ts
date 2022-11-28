import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProtocolsListData
/** 
 * An Firewall Manager protocols list.
**/
export class ProtocolsListData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId?: string;

  @SpeakeasyMetadata({ data: "json, name=ListName" })
  listName: string;

  @SpeakeasyMetadata({ data: "json, name=ListUpdateToken" })
  listUpdateToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousProtocolsList" })
  previousProtocolsList?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ProtocolsList" })
  protocolsList: string[];
}
