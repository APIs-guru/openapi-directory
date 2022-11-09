import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopStepConfig } from "./hadoopstepconfig";
import { StepStatus } from "./stepstatus";


// Step
/** 
 * This represents a step in a cluster.
**/
export class Step extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionOnFailure" })
  actionOnFailure?: ActionOnFailureEnum;

  @Metadata({ data: "json, name=Config" })
  config?: HadoopStepConfig;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StepStatus;
}
