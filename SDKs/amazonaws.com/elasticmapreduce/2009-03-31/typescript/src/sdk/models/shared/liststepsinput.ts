import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StepStateEnum } from "./stepstateenum";


// ListStepsInput
/** 
 * This input determines which steps to list.
**/
export class ListStepsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=StepIds" })
  stepIds?: string[];

  @Metadata({ data: "json, name=StepStates" })
  stepStates?: StepStateEnum[];
}
