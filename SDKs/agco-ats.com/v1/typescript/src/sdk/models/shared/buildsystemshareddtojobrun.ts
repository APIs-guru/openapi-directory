import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoActivityRun } from "./buildsystemshareddtoactivityrun";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";

export enum BuildSystemSharedDtoJobRunStatusEnum {
    Ready = "Ready"
,    InProgress = "InProgress"
,    Succeeded = "Succeeded"
,    Cancelled = "Cancelled"
,    Failed = "Failed"
}


// BuildSystemSharedDtoJobRun
/** 
 * A DTO for an IJobRun
**/
export class BuildSystemSharedDtoJobRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityRuns", elemType: shared.BuildSystemSharedDtoActivityRun })
  activityRuns?: BuildSystemSharedDtoActivityRun[];

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=JobID" })
  jobId?: number;

  @Metadata({ data: "json, name=JobRunID" })
  jobRunId?: number;

  @Metadata({ data: "json, name=Parameters", elemType: shared.BuildSystemSharedDtoParameterValue })
  parameters?: BuildSystemSharedDtoParameterValue[];

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: BuildSystemSharedDtoJobRunStatusEnum;
}
