import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProtocolsListData
/** 
 * An Firewall Manager protocols list.
**/
export class ProtocolsListData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=ListId" })
  listId?: string;

  @Metadata({ data: "json, name=ListName" })
  listName: string;

  @Metadata({ data: "json, name=ListUpdateToken" })
  listUpdateToken?: string;

  @Metadata({ data: "json, name=PreviousProtocolsList" })
  previousProtocolsList?: Map<string, string[]>;

  @Metadata({ data: "json, name=ProtocolsList" })
  protocolsList: string[];
}
