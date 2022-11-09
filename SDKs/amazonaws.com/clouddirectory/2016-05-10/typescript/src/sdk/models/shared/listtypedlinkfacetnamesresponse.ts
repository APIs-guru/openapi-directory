import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTypedLinkFacetNamesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FacetNames" })
  facetNames?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
