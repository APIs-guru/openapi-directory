import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BuildSystemSharedDtoActivityRunStatusStatusEnum {
    Ready = "Ready",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Cancelled = "Cancelled",
    Failed = "Failed"
}


// BuildSystemSharedDtoActivityRunStatus
/** 
 * A DTO for an IActivityRunStatus
**/
export class BuildSystemSharedDtoActivityRunStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentStep, form, name=CurrentStep;" })
  currentStep?: number;

  @SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" })
  status?: BuildSystemSharedDtoActivityRunStatusStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StepProgress, form, name=StepProgress;" })
  stepProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=StepStatus, form, name=StepStatus;" })
  stepStatus?: string;
}
