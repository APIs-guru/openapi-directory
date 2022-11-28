import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopJarStepConfig } from "./hadoopjarstepconfig";



// StepConfig
/** 
 * Specification for a cluster (job flow) step.
**/
export class StepConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionOnFailure" })
  actionOnFailure?: ActionOnFailureEnum;

  @SpeakeasyMetadata({ data: "json, name=HadoopJarStep" })
  hadoopJarStep: HadoopJarStepConfig;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
