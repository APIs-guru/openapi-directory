import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeKeyAndValue } from "./attributekeyandvalue";


// BatchGetObjectAttributesResponse
/** 
 * Represents the output of a <a>GetObjectAttributes</a> response operation.
**/
export class BatchGetObjectAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];
}
