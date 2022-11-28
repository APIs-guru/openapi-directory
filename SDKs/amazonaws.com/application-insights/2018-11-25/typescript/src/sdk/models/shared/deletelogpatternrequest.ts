import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLogPatternRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PatternName" })
  patternName: string;

  @SpeakeasyMetadata({ data: "json, name=PatternSetName" })
  patternSetName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
