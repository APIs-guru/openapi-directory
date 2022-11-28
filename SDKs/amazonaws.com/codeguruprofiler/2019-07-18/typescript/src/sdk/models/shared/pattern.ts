import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Pattern
/** 
 *  A set of rules used to make a recommendation during an analysis. 
**/
export class Pattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countersToAggregate" })
  countersToAggregate?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resolutionSteps" })
  resolutionSteps?: string;

  @SpeakeasyMetadata({ data: "json, name=targetFrames" })
  targetFrames?: string[][];

  @SpeakeasyMetadata({ data: "json, name=thresholdPercent" })
  thresholdPercent?: number;
}
