import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";



// BuildSystemSharedDtoActivityInput
/** 
 * A DTO for an IActivity
**/
export class BuildSystemSharedDtoActivityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityID, form, name=ActivityID;" })
  activityId?: number;

  @SpeakeasyMetadata({ data: "json, name=Deleted, form, name=Deleted;" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}


// BuildSystemSharedDtoActivity
/** 
 * A DTO for an IActivity
**/
export class BuildSystemSharedDtoActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityID" })
  activityId?: number;

  @SpeakeasyMetadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameter })
  parameters?: BuildSystemSharedDtoParameter[];

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: BuildSystemSharedDtoActivityStep })
  steps?: BuildSystemSharedDtoActivityStep[];
}
