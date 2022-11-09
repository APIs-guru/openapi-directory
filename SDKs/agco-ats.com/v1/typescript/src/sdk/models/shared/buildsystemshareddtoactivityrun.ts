import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";
import { BuildSystemSharedDtoActivityRunStatus } from "./buildsystemshareddtoactivityrunstatus";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";


// BuildSystemSharedDtoActivityRun
/** 
 * A DTO for an IActivityRun
**/
export class BuildSystemSharedDtoActivityRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityRunID" })
  activityRunId?: number;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=JobActivityID" })
  jobActivityId?: number;

  @Metadata({ data: "json, name=JobRunID" })
  jobRunId?: number;

  @Metadata({ data: "json, name=Parameters", elemType: shared.BuildSystemSharedDtoParameterValue })
  parameters?: BuildSystemSharedDtoParameterValue[];

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status: BuildSystemSharedDtoActivityRunStatus;

  @Metadata({ data: "json, name=Steps", elemType: shared.BuildSystemSharedDtoActivityStep })
  steps?: BuildSystemSharedDtoActivityStep[];
}
