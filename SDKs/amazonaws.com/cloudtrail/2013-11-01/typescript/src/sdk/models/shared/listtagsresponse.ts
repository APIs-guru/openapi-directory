import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";



// ListTagsResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class ListTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceTagList", elemType: ResourceTag })
  resourceTagList?: ResourceTag[];
}
