import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetVisibleToAllUsersInput
/** 
 * The input to the SetVisibleToAllUsers action.
**/
export class SetVisibleToAllUsersInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobFlowIds" })
  jobFlowIds: string[];

  @Metadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers: boolean;
}
