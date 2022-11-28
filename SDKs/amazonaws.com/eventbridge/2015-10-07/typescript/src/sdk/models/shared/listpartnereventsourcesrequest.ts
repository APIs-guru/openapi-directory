import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPartnerEventSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NamePrefix" })
  namePrefix: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
