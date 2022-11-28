import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolsListDataSummary } from "./protocolslistdatasummary";



export class ListProtocolsListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtocolsLists", elemType: ProtocolsListDataSummary })
  protocolsLists?: ProtocolsListDataSummary[];
}
