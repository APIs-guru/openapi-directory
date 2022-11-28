import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
