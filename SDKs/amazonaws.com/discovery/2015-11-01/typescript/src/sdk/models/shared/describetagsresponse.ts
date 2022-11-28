import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTag } from "./configurationtag";



export class DescribeTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ConfigurationTag })
  tags?: ConfigurationTag[];
}
