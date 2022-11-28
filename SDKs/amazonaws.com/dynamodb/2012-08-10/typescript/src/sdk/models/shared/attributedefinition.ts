import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalarAttributeTypeEnum } from "./scalarattributetypeenum";



// AttributeDefinition
/** 
 * Represents an attribute for describing the key schema for the table and indexes.
**/
export class AttributeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeType" })
  attributeType: ScalarAttributeTypeEnum;
}
