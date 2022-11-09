import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoParameterMapping } from "./buildsystemshareddtoparametermapping";


// BuildSystemSharedDtoActivityStep
/** 
 * A DTO for an IActivityStep
**/
export class BuildSystemSharedDtoActivityStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityID" })
  activityId?: number;

  @Metadata({ data: "json, name=ActivityStepID" })
  activityStepId?: number;

  @Metadata({ data: "json, name=ImplementationID" })
  implementationId?: string;

  @Metadata({ data: "json, name=ParameterMappings", elemType: shared.BuildSystemSharedDtoParameterMapping })
  parameterMappings?: BuildSystemSharedDtoParameterMapping[];

  @Metadata({ data: "json, name=RunOrder" })
  runOrder?: number;

  @Metadata({ data: "json, name=StepID" })
  stepId?: number;

  @Metadata({ data: "json, name=StepName" })
  stepName?: string;

  @Metadata({ data: "json, name=UseConfig" })
  useConfig?: string;
}
