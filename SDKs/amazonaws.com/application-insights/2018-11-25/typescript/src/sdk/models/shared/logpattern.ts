import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogPattern
/** 
 * An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.
**/
export class LogPattern extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pattern" })
  pattern?: string;

  @Metadata({ data: "json, name=PatternName" })
  patternName?: string;

  @Metadata({ data: "json, name=PatternSetName" })
  patternSetName?: string;

  @Metadata({ data: "json, name=Rank" })
  rank?: number;
}
