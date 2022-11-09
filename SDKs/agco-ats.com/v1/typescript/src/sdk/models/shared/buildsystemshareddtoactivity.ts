import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";


// BuildSystemSharedDtoActivity
/** 
 * A DTO for an IActivity
**/
export class BuildSystemSharedDtoActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityID" })
  activityId?: number;

  @Metadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.BuildSystemSharedDtoParameter })
  parameters?: BuildSystemSharedDtoParameter[];

  @Metadata({ data: "json, name=Steps", elemType: shared.BuildSystemSharedDtoActivityStep })
  steps?: BuildSystemSharedDtoActivityStep[];
}
