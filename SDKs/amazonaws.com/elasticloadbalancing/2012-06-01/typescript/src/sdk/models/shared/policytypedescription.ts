import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyAttributeTypeDescription } from "./policyattributetypedescription";



// PolicyTypeDescription
/** 
 * Information about a policy type.
**/
export class PolicyTypeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: PolicyAttributeTypeDescription })
  policyAttributeTypeDescriptions?: PolicyAttributeTypeDescription[];

  @SpeakeasyMetadata()
  policyTypeName?: string;
}
