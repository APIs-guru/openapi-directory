import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaAttributeType } from "./schemaattributetype";


// AddCustomAttributesRequest
/** 
 * Represents the request to add custom attributes.
**/
export class AddCustomAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomAttributes", elemType: shared.SchemaAttributeType })
  customAttributes: SchemaAttributeType[];

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
