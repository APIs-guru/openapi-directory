import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameterMapping } from "./buildsystemshareddtoparametermapping";



// BuildSystemSharedDtoJobActivity
/** 
 * A DTO for an IJobActivity
**/
export class BuildSystemSharedDtoJobActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityID" })
  activityId?: number;

  @SpeakeasyMetadata({ data: "json, name=JobActivityID" })
  jobActivityId?: number;

  @SpeakeasyMetadata({ data: "json, name=JobID" })
  jobId?: number;

  @SpeakeasyMetadata({ data: "json, name=ParameterMappings", elemType: BuildSystemSharedDtoParameterMapping })
  parameterMappings?: BuildSystemSharedDtoParameterMapping[];

  @SpeakeasyMetadata({ data: "json, name=RunOrder" })
  runOrder?: number;
}
