import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalarAttributeTypeEnum } from "./scalarattributetypeenum";



// KeySchemaElement
/** 
 * <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.
**/
export class KeySchemaElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeType" })
  attributeType: ScalarAttributeTypeEnum;
}
