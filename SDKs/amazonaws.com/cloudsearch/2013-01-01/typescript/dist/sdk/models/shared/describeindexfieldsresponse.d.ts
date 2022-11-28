import { SpeakeasyBase } from "../../../internal/utils";
import { IndexFieldStatus } from "./indexfieldstatus";
/**
 * The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.
**/
export declare class DescribeIndexFieldsResponse extends SpeakeasyBase {
    indexFields: IndexFieldStatus[];
}
