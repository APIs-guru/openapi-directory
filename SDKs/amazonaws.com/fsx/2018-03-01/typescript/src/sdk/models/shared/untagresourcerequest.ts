import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UntagResourceRequest
/** 
 * The request object for <code>UntagResource</code> action.
**/
export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
