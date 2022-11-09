import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
