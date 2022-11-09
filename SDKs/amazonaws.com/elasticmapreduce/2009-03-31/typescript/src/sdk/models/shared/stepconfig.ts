import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopJarStepConfig } from "./hadoopjarstepconfig";


// StepConfig
/** 
 * Specification for a cluster (job flow) step.
**/
export class StepConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionOnFailure" })
  actionOnFailure?: ActionOnFailureEnum;

  @Metadata({ data: "json, name=HadoopJarStep" })
  hadoopJarStep: HadoopJarStepConfig;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
