import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPartnerEventSourceAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSourceName" })
  eventSourceName: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
