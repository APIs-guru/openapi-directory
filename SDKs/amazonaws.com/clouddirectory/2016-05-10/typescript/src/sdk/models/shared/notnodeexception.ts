import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotNodeException
/** 
 * Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.
**/
export class NotNodeException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
