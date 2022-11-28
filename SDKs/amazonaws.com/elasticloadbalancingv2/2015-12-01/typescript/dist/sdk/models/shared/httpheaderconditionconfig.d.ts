import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
**/
export declare class HttpHeaderConditionConfig extends SpeakeasyBase {
    httpHeaderName?: string;
    values?: string[];
}
