import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// PutRequest
/** 
 * A container for a Put BatchWrite request
**/
export class PutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item: Map<string, AttributeValue>;
}
