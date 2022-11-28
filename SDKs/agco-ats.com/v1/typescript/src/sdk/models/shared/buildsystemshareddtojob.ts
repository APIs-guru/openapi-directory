import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoJobActivity } from "./buildsystemshareddtojobactivity";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";



// BuildSystemSharedDtoJob
/** 
 * A DTO for an IJob
**/
export class BuildSystemSharedDtoJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Activities", elemType: BuildSystemSharedDtoJobActivity })
  activities?: BuildSystemSharedDtoJobActivity[];

  @SpeakeasyMetadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=JobID" })
  jobId?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameter })
  parameters?: BuildSystemSharedDtoParameter[];
}


// BuildSystemSharedDtoJobInput
/** 
 * A DTO for an IJob
**/
export class BuildSystemSharedDtoJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deleted, form, name=Deleted;" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=JobID, form, name=JobID;" })
  jobId?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
