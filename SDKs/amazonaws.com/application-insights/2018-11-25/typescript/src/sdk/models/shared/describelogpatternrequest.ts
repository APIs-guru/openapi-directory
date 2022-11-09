import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLogPatternRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PatternName" })
  patternName: string;

  @Metadata({ data: "json, name=PatternSetName" })
  patternSetName: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
