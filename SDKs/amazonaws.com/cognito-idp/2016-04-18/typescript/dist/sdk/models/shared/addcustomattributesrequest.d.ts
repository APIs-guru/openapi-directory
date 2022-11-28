import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaAttributeType } from "./schemaattributetype";
/**
 * Represents the request to add custom attributes.
**/
export declare class AddCustomAttributesRequest extends SpeakeasyBase {
    customAttributes: SchemaAttributeType[];
    userPoolId: string;
}
