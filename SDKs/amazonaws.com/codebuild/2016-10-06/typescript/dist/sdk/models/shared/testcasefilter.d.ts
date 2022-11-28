import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.
**/
export declare class TestCaseFilter extends SpeakeasyBase {
    keyword?: string;
    status?: string;
}
