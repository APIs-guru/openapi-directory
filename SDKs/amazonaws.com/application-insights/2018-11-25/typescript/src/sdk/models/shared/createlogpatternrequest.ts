import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLogPatternRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pattern" })
  pattern: string;

  @Metadata({ data: "json, name=PatternName" })
  patternName: string;

  @Metadata({ data: "json, name=PatternSetName" })
  patternSetName: string;

  @Metadata({ data: "json, name=Rank" })
  rank: number;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
