import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Details for the requested item.
**/
export declare class ItemResponse extends SpeakeasyBase {
    item?: Map<string, AttributeValue>;
}
