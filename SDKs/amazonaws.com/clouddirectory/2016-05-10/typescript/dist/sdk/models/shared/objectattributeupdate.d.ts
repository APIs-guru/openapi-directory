import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAttributeAction } from "./objectattributeaction";
import { AttributeKey } from "./attributekey";
/**
 * Structure that contains attribute update information.
**/
export declare class ObjectAttributeUpdate extends SpeakeasyBase {
    objectAttributeAction?: ObjectAttributeAction;
    objectAttributeKey?: AttributeKey;
}
