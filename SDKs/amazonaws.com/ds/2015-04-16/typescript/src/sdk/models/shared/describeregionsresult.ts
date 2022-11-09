import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionDescription } from "./regiondescription";


export class DescribeRegionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RegionsDescription", elemType: shared.RegionDescription })
  regionsDescription?: RegionDescription[];
}
