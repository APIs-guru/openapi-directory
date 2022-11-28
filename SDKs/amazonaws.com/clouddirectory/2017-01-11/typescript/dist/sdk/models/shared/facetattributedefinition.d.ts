import { SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";
/**
 * A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.
**/
export declare class FacetAttributeDefinition extends SpeakeasyBase {
    defaultValue?: TypedAttributeValue;
    isImmutable?: boolean;
    rules?: Map<string, Rule>;
    type: FacetAttributeTypeEnum;
}
