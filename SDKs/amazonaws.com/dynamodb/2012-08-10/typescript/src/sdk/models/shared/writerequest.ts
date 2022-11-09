import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeleteRequest } from "./deleterequest";
import { PutRequest } from "./putrequest";


// WriteRequest
/** 
 * Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects.
**/
export class WriteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteRequest" })
  deleteRequest?: DeleteRequest;

  @Metadata({ data: "json, name=PutRequest" })
  putRequest?: PutRequest;
}
