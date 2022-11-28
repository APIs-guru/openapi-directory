import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteRequest } from "./deleterequest";
import { PutRequest } from "./putrequest";



// WriteRequest
/** 
 * This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code.
**/
export class WriteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteRequest" })
  deleteRequest?: DeleteRequest;

  @SpeakeasyMetadata({ data: "json, name=PutRequest" })
  putRequest?: PutRequest;
}
