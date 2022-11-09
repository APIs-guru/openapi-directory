import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalarAttributeTypeEnum } from "./scalarattributetypeenum";


// KeySchemaElement
/** 
 * <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.
**/
export class KeySchemaElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=AttributeType" })
  attributeType: ScalarAttributeTypeEnum;
}
