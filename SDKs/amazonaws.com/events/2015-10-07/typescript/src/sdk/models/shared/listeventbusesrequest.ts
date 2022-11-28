import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListEventBusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
