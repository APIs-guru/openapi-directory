import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Match
/** 
 * The part of a profile that contains a recommendation found during analysis.
**/
export class Match extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameAddress" })
  frameAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=targetFramesIndex" })
  targetFramesIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdBreachValue" })
  thresholdBreachValue?: number;
}
