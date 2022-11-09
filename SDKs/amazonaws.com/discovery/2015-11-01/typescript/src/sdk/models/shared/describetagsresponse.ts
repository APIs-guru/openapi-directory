import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationTag } from "./configurationtag";


export class DescribeTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.ConfigurationTag })
  tags?: ConfigurationTag[];
}
