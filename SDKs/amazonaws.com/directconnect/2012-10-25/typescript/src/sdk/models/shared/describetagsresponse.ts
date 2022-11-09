import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceTag } from "./resourcetag";


export class DescribeTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceTags", elemType: shared.ResourceTag })
  resourceTags?: ResourceTag[];
}
