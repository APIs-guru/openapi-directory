import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoJobActivity } from "./buildsystemshareddtojobactivity";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";


// BuildSystemSharedDtoJob
/** 
 * A DTO for an IJob
**/
export class BuildSystemSharedDtoJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=Activities", elemType: shared.BuildSystemSharedDtoJobActivity })
  activities?: BuildSystemSharedDtoJobActivity[];

  @Metadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=JobID" })
  jobId?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.BuildSystemSharedDtoParameter })
  parameters?: BuildSystemSharedDtoParameter[];
}
