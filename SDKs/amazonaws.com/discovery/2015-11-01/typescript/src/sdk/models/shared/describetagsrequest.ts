import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagFilter } from "./tagfilter";


export class DescribeTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.TagFilter })
  filters?: TagFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
