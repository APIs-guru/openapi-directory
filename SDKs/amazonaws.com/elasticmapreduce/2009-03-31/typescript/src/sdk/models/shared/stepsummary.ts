import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopStepConfig } from "./hadoopstepconfig";
import { StepStatus } from "./stepstatus";


// StepSummary
/** 
 * The summary of the cluster step.
**/
export class StepSummary extends SpeakeasyBase {
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
