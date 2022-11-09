import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForResourceMessage
/** 
 * <p/>
**/
export class ListTagsForResourceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=ResourceArnList" })
  resourceArnList?: string[];
}
