import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchemaFacet
/** 
 * A facet.
**/
export class SchemaFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=FacetName" })
  facetName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;
}
