import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDirectoryConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryNames" })
  directoryNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
