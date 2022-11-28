import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTypedLinkFacetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetNames" })
  facetNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
