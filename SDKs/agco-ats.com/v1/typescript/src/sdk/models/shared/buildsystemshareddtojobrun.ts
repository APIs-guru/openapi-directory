import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivityRun } from "./buildsystemshareddtoactivityrun";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";


export enum BuildSystemSharedDtoJobRunStatusEnum {
    Ready = "Ready",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Cancelled = "Cancelled",
    Failed = "Failed"
}


// BuildSystemSharedDtoJobRunInput
/** 
 * A DTO for an IJobRun
**/
export class BuildSystemSharedDtoJobRunInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndDate, form, name=EndDate;" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobID, form, name=JobID;" })
  jobId?: number;

  @SpeakeasyMetadata({ data: "json, name=JobRunID, form, name=JobRunID;" })
  jobRunId?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate, form, name=StartDate;" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" })
  status?: BuildSystemSharedDtoJobRunStatusEnum;
}


// BuildSystemSharedDtoJobRun
/** 
 * A DTO for an IJobRun
**/
export class BuildSystemSharedDtoJobRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityRuns", elemType: BuildSystemSharedDtoActivityRun })
  activityRuns?: BuildSystemSharedDtoActivityRun[];

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobID" })
  jobId?: number;

  @SpeakeasyMetadata({ data: "json, name=JobRunID" })
  jobRunId?: number;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameterValue })
  parameters?: BuildSystemSharedDtoParameterValue[];

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: BuildSystemSharedDtoJobRunStatusEnum;
}
