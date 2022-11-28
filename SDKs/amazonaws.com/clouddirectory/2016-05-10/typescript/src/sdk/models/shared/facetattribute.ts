import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FacetAttributeDefinition } from "./facetattributedefinition";
import { FacetAttributeReference } from "./facetattributereference";
import { RequiredAttributeBehaviorEnum } from "./requiredattributebehaviorenum";



// FacetAttribute
/** 
 * An attribute that is associated with the <a>Facet</a>.
**/
export class FacetAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeDefinition" })
  attributeDefinition?: FacetAttributeDefinition;

  @SpeakeasyMetadata({ data: "json, name=AttributeReference" })
  attributeReference?: FacetAttributeReference;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RequiredBehavior" })
  requiredBehavior?: RequiredAttributeBehaviorEnum;
}
