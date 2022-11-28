import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagFilter } from "./tagfilter";



export class DescribeTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: TagFilter })
  filters?: TagFilter[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
