import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoParameterMapping } from "./buildsystemshareddtoparametermapping";


// BuildSystemSharedDtoJobActivity
/** 
 * A DTO for an IJobActivity
**/
export class BuildSystemSharedDtoJobActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityID" })
  activityId?: number;

  @Metadata({ data: "json, name=JobActivityID" })
  jobActivityId?: number;

  @Metadata({ data: "json, name=JobID" })
  jobId?: number;

  @Metadata({ data: "json, name=ParameterMappings", elemType: shared.BuildSystemSharedDtoParameterMapping })
  parameterMappings?: BuildSystemSharedDtoParameterMapping[];

  @Metadata({ data: "json, name=RunOrder" })
  runOrder?: number;
}
