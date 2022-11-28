import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyAttributeTypeDescription
/** 
 * Information about a policy attribute type.
**/
export class PolicyAttributeTypeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeName?: string;

  @SpeakeasyMetadata()
  attributeType?: string;

  @SpeakeasyMetadata()
  cardinality?: string;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  description?: string;
}
