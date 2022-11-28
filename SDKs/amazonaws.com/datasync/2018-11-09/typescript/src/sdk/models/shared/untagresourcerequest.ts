import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UntagResourceRequest
/** 
 * UntagResourceRequest
**/
export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Keys" })
  keys: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
