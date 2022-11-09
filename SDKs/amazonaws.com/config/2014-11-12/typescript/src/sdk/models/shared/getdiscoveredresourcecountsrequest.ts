import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDiscoveredResourceCountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];
}
