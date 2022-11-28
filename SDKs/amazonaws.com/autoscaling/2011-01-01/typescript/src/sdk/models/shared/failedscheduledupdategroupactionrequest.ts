import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailedScheduledUpdateGroupActionRequest
/** 
 * Describes a scheduled action that could not be created, updated, or deleted.
**/
export class FailedScheduledUpdateGroupActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errorCode?: string;

  @SpeakeasyMetadata()
  errorMessage?: string;

  @SpeakeasyMetadata()
  scheduledActionName: string;
}
