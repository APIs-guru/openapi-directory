import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiscoveredResourceCountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];
}
