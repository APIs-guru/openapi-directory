import { SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";
/**
 * A facet attribute definition. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences">Attribute References</a> for more information.
**/
export declare class FacetAttributeDefinition extends SpeakeasyBase {
    defaultValue?: TypedAttributeValue;
    isImmutable?: boolean;
    rules?: Map<string, Rule>;
    type: FacetAttributeTypeEnum;
}
