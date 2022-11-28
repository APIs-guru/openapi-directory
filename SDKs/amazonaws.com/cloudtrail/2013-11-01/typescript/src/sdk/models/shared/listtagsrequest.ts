import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsRequest
/** 
 * Specifies a list of trail tags to return.
**/
export class ListTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceIdList" })
  resourceIdList: string[];
}
