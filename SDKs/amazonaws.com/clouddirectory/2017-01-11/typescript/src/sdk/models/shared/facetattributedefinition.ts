import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";



// FacetAttributeDefinition
/** 
 * A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.
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
