import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeKeyAndValue } from "./attributekeyandvalue";


// BatchGetLinkAttributesResponse
/** 
 * Represents the output of a <a>GetLinkAttributes</a> response operation.
**/
export class BatchGetLinkAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];
}
