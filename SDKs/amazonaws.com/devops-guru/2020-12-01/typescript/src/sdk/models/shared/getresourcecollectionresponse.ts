import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceCollectionFilter } from "./resourcecollectionfilter";



export class GetResourceCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollectionFilter;
}
