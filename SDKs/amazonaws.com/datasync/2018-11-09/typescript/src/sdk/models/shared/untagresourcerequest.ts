import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UntagResourceRequest
/** 
 * UntagResourceRequest
**/
export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Keys" })
  keys: string[];

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
