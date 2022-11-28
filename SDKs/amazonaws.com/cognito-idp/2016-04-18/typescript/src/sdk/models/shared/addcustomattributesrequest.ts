import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaAttributeType } from "./schemaattributetype";



// AddCustomAttributesRequest
/** 
 * Represents the request to add custom attributes.
**/
export class AddCustomAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomAttributes", elemType: SchemaAttributeType })
  customAttributes: SchemaAttributeType[];

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
