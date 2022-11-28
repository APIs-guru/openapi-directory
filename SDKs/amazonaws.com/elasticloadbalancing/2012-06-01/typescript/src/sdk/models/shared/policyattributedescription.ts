import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyAttributeDescription
/** 
 * Information about a policy attribute.
**/
export class PolicyAttributeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeName?: string;

  @SpeakeasyMetadata()
  attributeValue?: string;
}
