import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogPattern
/** 
 * An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.
**/
export class LogPattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "json, name=PatternName" })
  patternName?: string;

  @SpeakeasyMetadata({ data: "json, name=PatternSetName" })
  patternSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=Rank" })
  rank?: number;
}
