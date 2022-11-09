import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Pattern
/** 
 *  A set of rules used to make a recommendation during an analysis. 
**/
export class Pattern extends SpeakeasyBase {
  @Metadata({ data: "json, name=countersToAggregate" })
  countersToAggregate?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resolutionSteps" })
  resolutionSteps?: string;

  @Metadata({ data: "json, name=targetFrames" })
  targetFrames?: string[][];

  @Metadata({ data: "json, name=thresholdPercent" })
  thresholdPercent?: number;
}
