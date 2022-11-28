import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteRequest } from "./deleterequest";
import { PutRequest } from "./putrequest";
/**
 * Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects.
**/
export declare class WriteRequest extends SpeakeasyBase {
    deleteRequest?: DeleteRequest;
    putRequest?: PutRequest;
}
