import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionSummary } from "./connectionsummary";



export class ListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionSummaryList", elemType: ConnectionSummary })
  connectionSummaryList: ConnectionSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
