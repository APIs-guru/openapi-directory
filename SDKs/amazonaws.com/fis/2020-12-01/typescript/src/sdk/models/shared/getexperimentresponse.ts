import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Experiment } from "./experiment";



export class GetExperimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experiment" })
  experiment?: Experiment;
}
