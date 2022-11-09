import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceCollectionFilter } from "./resourcecollectionfilter";


export class GetResourceCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollectionFilter;
}
