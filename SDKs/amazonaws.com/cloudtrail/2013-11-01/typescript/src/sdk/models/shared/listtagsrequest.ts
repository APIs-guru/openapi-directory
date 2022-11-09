import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsRequest
/** 
 * Specifies a list of trail tags to return.
**/
export class ListTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceIdList" })
  resourceIdList: string[];
}
