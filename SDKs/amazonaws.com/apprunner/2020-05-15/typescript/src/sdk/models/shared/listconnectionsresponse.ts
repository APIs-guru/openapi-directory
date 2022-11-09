import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionSummary } from "./connectionsummary";


export class ListConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionSummaryList", elemType: shared.ConnectionSummary })
  connectionSummaryList: ConnectionSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
