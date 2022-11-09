import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FacetAttributeDefinition } from "./facetattributedefinition";
import { FacetAttributeReference } from "./facetattributereference";
import { RequiredAttributeBehaviorEnum } from "./requiredattributebehaviorenum";


// FacetAttribute
/** 
 * An attribute that is associated with the <a>Facet</a>.
**/
export class FacetAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeDefinition" })
  attributeDefinition?: FacetAttributeDefinition;

  @Metadata({ data: "json, name=AttributeReference" })
  attributeReference?: FacetAttributeReference;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RequiredBehavior" })
  requiredBehavior?: RequiredAttributeBehaviorEnum;
}
