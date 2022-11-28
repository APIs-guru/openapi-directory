import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForResourceMessage
/** 
 * <p/>
**/
export class ListTagsForResourceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArnList" })
  resourceArnList?: string[];
}
