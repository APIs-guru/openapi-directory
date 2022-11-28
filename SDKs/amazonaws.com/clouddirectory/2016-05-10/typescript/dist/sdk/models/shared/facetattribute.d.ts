import { SpeakeasyBase } from "../../../internal/utils";
import { FacetAttributeDefinition } from "./facetattributedefinition";
import { FacetAttributeReference } from "./facetattributereference";
import { RequiredAttributeBehaviorEnum } from "./requiredattributebehaviorenum";
/**
 * An attribute that is associated with the <a>Facet</a>.
**/
export declare class FacetAttribute extends SpeakeasyBase {
    attributeDefinition?: FacetAttributeDefinition;
    attributeReference?: FacetAttributeReference;
    name: string;
    requiredBehavior?: RequiredAttributeBehaviorEnum;
}
