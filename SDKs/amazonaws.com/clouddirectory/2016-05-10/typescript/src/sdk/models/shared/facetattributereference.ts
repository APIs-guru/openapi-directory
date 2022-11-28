import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FacetAttributeReference
/** 
 * The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.
**/
export class FacetAttributeReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetAttributeName" })
  targetAttributeName: string;

  @SpeakeasyMetadata({ data: "json, name=TargetFacetName" })
  targetFacetName: string;
}
