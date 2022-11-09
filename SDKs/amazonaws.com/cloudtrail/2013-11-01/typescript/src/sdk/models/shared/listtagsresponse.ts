import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceTag } from "./resourcetag";


// ListTagsResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class ListTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceTagList", elemType: shared.ResourceTag })
  resourceTagList?: ResourceTag[];
}
