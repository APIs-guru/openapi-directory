import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";



export class DescribeTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceTags", elemType: ResourceTag })
  resourceTags?: ResourceTag[];
}
