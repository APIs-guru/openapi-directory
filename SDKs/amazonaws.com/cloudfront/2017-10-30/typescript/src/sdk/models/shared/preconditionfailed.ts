import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreconditionFailed
/** 
 * The precondition given in one or more of the request-header fields evaluated to <code>false</code>. 
**/
export class PreconditionFailed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
