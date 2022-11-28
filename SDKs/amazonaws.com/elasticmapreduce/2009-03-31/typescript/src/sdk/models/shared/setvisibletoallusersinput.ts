import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetVisibleToAllUsersInput
/** 
 * The input to the SetVisibleToAllUsers action.
**/
export class SetVisibleToAllUsersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobFlowIds" })
  jobFlowIds: string[];

  @SpeakeasyMetadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers: boolean;
}
