import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeKeyAndValue } from "./attributekeyandvalue";


// IndexAttachment
/** 
 * Represents an index and an attached object.
**/
export class IndexAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexedAttributes", elemType: shared.AttributeKeyAndValue })
  indexedAttributes?: AttributeKeyAndValue[];

  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
