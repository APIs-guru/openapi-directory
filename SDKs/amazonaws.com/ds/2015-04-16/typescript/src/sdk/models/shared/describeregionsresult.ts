import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionDescription } from "./regiondescription";



export class DescribeRegionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RegionsDescription", elemType: RegionDescription })
  regionsDescription?: RegionDescription[];
}
