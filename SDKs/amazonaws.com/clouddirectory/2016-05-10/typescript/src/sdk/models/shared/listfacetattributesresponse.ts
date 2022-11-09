import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FacetAttribute } from "./facetattribute";


export class ListFacetAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.FacetAttribute })
  attributes?: FacetAttribute[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
