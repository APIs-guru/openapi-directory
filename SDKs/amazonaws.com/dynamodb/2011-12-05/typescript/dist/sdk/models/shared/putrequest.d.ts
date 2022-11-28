import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * A container for a Put BatchWrite request
**/
export declare class PutRequest extends SpeakeasyBase {
    item: Map<string, AttributeValue>;
}
