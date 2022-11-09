import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotNodeException
/** 
 * Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.
**/
export class NotNodeException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
