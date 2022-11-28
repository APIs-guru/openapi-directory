import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Experiment } from "./experiment";



export class StopExperimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experiment" })
  experiment?: Experiment;
}
