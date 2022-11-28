import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateLogPatternRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "json, name=PatternName" })
  patternName: string;

  @SpeakeasyMetadata({ data: "json, name=PatternSetName" })
  patternSetName: string;

  @SpeakeasyMetadata({ data: "json, name=Rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
