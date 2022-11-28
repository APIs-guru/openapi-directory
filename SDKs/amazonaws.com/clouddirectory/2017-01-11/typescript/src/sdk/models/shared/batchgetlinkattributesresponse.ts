import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";



// BatchGetLinkAttributesResponse
/** 
 * Represents the output of a <a>GetLinkAttributes</a> response operation.
**/
export class BatchGetLinkAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];
}
