import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UntagResourceRequest
/** 
 * The request object for <code>UntagResource</code> action.
**/
export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
