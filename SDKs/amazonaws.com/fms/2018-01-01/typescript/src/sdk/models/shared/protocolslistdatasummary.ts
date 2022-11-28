import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProtocolsListDataSummary
/** 
 * Details of the Firewall Manager protocols list.
**/
export class ProtocolsListDataSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListArn" })
  listArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId?: string;

  @SpeakeasyMetadata({ data: "json, name=ListName" })
  listName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtocolsList" })
  protocolsList?: string[];
}
