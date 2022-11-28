import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepStateEnum } from "./stepstateenum";



// ListStepsInput
/** 
 * This input determines which steps to list.
**/
export class ListStepsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=StepIds" })
  stepIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StepStates" })
  stepStates?: StepStateEnum[];
}
