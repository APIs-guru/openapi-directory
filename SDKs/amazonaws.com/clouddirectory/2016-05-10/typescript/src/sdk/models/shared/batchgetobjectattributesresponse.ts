import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";



// BatchGetObjectAttributesResponse
/** 
 * Represents the output of a <a>GetObjectAttributes</a> response operation.
**/
export class BatchGetObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];
}
