import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedAttributeValue } from "./typedattributevalue";
import { RequiredAttributeBehaviorEnum } from "./requiredattributebehaviorenum";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";


// TypedLinkAttributeDefinition
/** 
 * A typed link attribute definition.
**/
export class TypedLinkAttributeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultValue" })
  defaultValue?: TypedAttributeValue;

  @Metadata({ data: "json, name=IsImmutable" })
  isImmutable?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RequiredBehavior" })
  requiredBehavior: RequiredAttributeBehaviorEnum;

  @Metadata({ data: "json, name=Rules", elemType: shared.Rule })
  rules?: Map<string, Rule>;

  @Metadata({ data: "json, name=Type" })
  type: FacetAttributeTypeEnum;
}
