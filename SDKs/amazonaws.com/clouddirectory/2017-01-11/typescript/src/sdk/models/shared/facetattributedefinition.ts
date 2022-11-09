import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedAttributeValue } from "./typedattributevalue";
import { Rule } from "./rule";
import { FacetAttributeTypeEnum } from "./facetattributetypeenum";


// FacetAttributeDefinition
/** 
 * A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.
**/
export class FacetAttributeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultValue" })
  defaultValue?: TypedAttributeValue;

  @Metadata({ data: "json, name=IsImmutable" })
  isImmutable?: boolean;

  @Metadata({ data: "json, name=Rules", elemType: shared.Rule })
  rules?: Map<string, Rule>;

  @Metadata({ data: "json, name=Type" })
  type: FacetAttributeTypeEnum;
}
