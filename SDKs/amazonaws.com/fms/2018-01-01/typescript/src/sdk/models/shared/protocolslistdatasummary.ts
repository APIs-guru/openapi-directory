import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProtocolsListDataSummary
/** 
 * Details of the Firewall Manager protocols list.
**/
export class ProtocolsListDataSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ListArn" })
  listArn?: string;

  @Metadata({ data: "json, name=ListId" })
  listId?: string;

  @Metadata({ data: "json, name=ListName" })
  listName?: string;

  @Metadata({ data: "json, name=ProtocolsList" })
  protocolsList?: string[];
}
