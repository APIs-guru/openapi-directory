import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A query filter used by <code>ListUsers</code> and <code>ListGroup</code>. This filter object provides the attribute name and attribute value to search users or groups.
**/
export declare class Filter extends SpeakeasyBase {
    attributePath: string;
    attributeValue: string;
}
