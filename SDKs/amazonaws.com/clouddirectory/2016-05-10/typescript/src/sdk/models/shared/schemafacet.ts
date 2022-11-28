import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaFacet
/** 
 * A facet.
**/
export class SchemaFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetName" })
  facetName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}
