import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Experiment } from "./experiment";


export class GetExperimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experiment" })
  experiment?: Experiment;
}
