import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BuildSystemSharedDtoActivityRunStatusStatusEnum {
    Ready = "Ready"
,    InProgress = "InProgress"
,    Succeeded = "Succeeded"
,    Cancelled = "Cancelled"
,    Failed = "Failed"
}


// BuildSystemSharedDtoActivityRunStatus
/** 
 * A DTO for an IActivityRunStatus
**/
export class BuildSystemSharedDtoActivityRunStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentStep, form, name=CurrentStep;" })
  currentStep?: number;

  @Metadata({ data: "json, name=Status, form, name=Status;" })
  status?: BuildSystemSharedDtoActivityRunStatusStatusEnum;

  @Metadata({ data: "json, name=StepProgress, form, name=StepProgress;" })
  stepProgress?: number;

  @Metadata({ data: "json, name=StepStatus, form, name=StepStatus;" })
  stepStatus?: string;
}
