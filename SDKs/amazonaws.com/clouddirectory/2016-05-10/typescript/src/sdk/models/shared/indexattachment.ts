import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";



// IndexAttachment
/** 
 * Represents an index and an attached object.
**/
export class IndexAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexedAttributes", elemType: AttributeKeyAndValue })
  indexedAttributes?: AttributeKeyAndValue[];

  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;
}
