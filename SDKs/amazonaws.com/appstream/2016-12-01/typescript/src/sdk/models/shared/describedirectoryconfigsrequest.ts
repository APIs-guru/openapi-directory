import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDirectoryConfigsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryNames" })
  directoryNames?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
