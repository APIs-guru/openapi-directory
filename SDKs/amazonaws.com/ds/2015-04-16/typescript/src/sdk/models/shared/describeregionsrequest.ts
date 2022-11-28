import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName?: string;
}
