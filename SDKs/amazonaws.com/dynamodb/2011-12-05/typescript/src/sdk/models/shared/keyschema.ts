import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";



// KeySchema
/** 
 * The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>.
**/
export class KeySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HashKeyElement" })
  hashKeyElement: KeySchemaElement;

  @SpeakeasyMetadata({ data: "json, name=RangeKeyElement" })
  rangeKeyElement?: KeySchemaElement;
}
