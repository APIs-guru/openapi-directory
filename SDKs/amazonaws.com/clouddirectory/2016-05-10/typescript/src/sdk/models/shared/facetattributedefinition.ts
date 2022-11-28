import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";



// FacetAttributeDefinition
/** 
 * A facet attribute definition. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences">Attribute References</a> for more information.
**/
export class FacetAttributeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultValue" })
  defaultValue?: TypedAttributeValue;

  @SpeakeasyMetadata({ data: "json, name=IsImmutable" })
  isImmutable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: Rule })
  rules?: Map<string, Rule>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: FacetAttributeTypeEnum;
}
