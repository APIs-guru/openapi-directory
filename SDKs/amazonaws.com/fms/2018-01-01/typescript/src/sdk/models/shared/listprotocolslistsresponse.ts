import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProtocolsListDataSummary } from "./protocolslistdatasummary";


export class ListProtocolsListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProtocolsLists", elemType: shared.ProtocolsListDataSummary })
  protocolsLists?: ProtocolsListDataSummary[];
}
