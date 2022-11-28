import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { RequiredAttributeBehaviorEnum } from "./requiredattributebehaviorenum";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";



// TypedLinkAttributeDefinition
/** 
 * A typed link attribute definition.
**/
export class TypedLinkAttributeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultValue" })
  defaultValue?: TypedAttributeValue;

  @SpeakeasyMetadata({ data: "json, name=IsImmutable" })
  isImmutable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RequiredBehavior" })
  requiredBehavior: RequiredAttributeBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: Rule })
  rules?: Map<string, Rule>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: FacetAttributeTypeEnum;
}
