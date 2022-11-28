import { SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";
/**
 * A response message that contains the index fields for a search domain.
**/
export declare class DescribeIndexFieldsResponse extends SpeakeasyBase {
    indexFields: IndexFieldStatus[];
}
