import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameterMapping } from "./buildsystemshareddtoparametermapping";



// BuildSystemSharedDtoActivityStep
/** 
 * A DTO for an IActivityStep
**/
export class BuildSystemSharedDtoActivityStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityID" })
  activityId?: number;

  @SpeakeasyMetadata({ data: "json, name=ActivityStepID" })
  activityStepId?: number;

  @SpeakeasyMetadata({ data: "json, name=ImplementationID" })
  implementationId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterMappings", elemType: BuildSystemSharedDtoParameterMapping })
  parameterMappings?: BuildSystemSharedDtoParameterMapping[];

  @SpeakeasyMetadata({ data: "json, name=RunOrder" })
  runOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=StepID" })
  stepId?: number;

  @SpeakeasyMetadata({ data: "json, name=StepName" })
  stepName?: string;

  @SpeakeasyMetadata({ data: "json, name=UseConfig" })
  useConfig?: string;
}
