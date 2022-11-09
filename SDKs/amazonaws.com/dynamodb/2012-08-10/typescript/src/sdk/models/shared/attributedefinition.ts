import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalarAttributeTypeEnum } from "./scalarattributetypeenum";


// AttributeDefinition
/** 
 * Represents an attribute for describing the key schema for the table and indexes.
**/
export class AttributeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=AttributeType" })
  attributeType: ScalarAttributeTypeEnum;
}
