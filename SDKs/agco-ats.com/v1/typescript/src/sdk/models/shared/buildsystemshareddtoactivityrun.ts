import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivityRunStatus } from "./buildsystemshareddtoactivityrunstatus";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";



// BuildSystemSharedDtoActivityRunInput
/** 
 * A DTO for an IActivityRun
**/
export class BuildSystemSharedDtoActivityRunInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityRunID, form, name=ActivityRunID;" })
  activityRunId?: number;

  @SpeakeasyMetadata({ data: "json, name=EndDate, form, name=EndDate;" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobActivityID, form, name=JobActivityID;" })
  jobActivityId?: number;

  @SpeakeasyMetadata({ data: "json, name=JobRunID, form, name=JobRunID;" })
  jobRunId?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate, form, name=StartDate;" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" })
  status: BuildSystemSharedDtoActivityRunStatus;
}


// BuildSystemSharedDtoActivityRun
/** 
 * A DTO for an IActivityRun
**/
export class BuildSystemSharedDtoActivityRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityRunID" })
  activityRunId?: number;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobActivityID" })
  jobActivityId?: number;

  @SpeakeasyMetadata({ data: "json, name=JobRunID" })
  jobRunId?: number;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameterValue })
  parameters?: BuildSystemSharedDtoParameterValue[];

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: BuildSystemSharedDtoActivityRunStatus;

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: BuildSystemSharedDtoActivityStep })
  steps?: BuildSystemSharedDtoActivityStep[];
}
