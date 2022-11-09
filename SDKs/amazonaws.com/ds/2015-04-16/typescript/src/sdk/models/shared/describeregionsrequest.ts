import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeRegionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RegionName" })
  regionName?: string;
}
