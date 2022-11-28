import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPartnerEventSourceAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSourceName" })
  eventSourceName: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
