import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FacetAttribute } from "./facetattribute";



export class ListFacetAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: FacetAttribute })
  attributes?: FacetAttribute[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
