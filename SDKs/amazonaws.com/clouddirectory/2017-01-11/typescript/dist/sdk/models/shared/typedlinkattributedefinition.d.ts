import { SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { RequiredAttributeBehaviorEnum } from "./requiredattributebehaviorenum";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";
/**
 * A typed link attribute definition.
**/
export declare class TypedLinkAttributeDefinition extends SpeakeasyBase {
    defaultValue?: TypedAttributeValue;
    isImmutable?: boolean;
    name: string;
    requiredBehavior: RequiredAttributeBehaviorEnum;
    rules?: Map<string, Rule>;
    type: FacetAttributeTypeEnum;
}
