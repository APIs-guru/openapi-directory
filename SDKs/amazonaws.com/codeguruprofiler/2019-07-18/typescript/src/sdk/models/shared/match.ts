import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Match
/** 
 * The part of a profile that contains a recommendation found during analysis.
**/
export class Match extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameAddress" })
  frameAddress?: string;

  @Metadata({ data: "json, name=targetFramesIndex" })
  targetFramesIndex?: number;

  @Metadata({ data: "json, name=thresholdBreachValue" })
  thresholdBreachValue?: number;
}
