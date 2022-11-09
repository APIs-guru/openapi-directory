import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FacetAttributeReference
/** 
 * The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.
**/
export class FacetAttributeReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetAttributeName" })
  targetAttributeName: string;

  @Metadata({ data: "json, name=TargetFacetName" })
  targetFacetName: string;
}
