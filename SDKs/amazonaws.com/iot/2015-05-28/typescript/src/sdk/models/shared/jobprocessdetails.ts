import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobProcessDetails
/** 
 * The job process details.
**/
export class JobProcessDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfCanceledThings" })
  numberOfCanceledThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfFailedThings" })
  numberOfFailedThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfInProgressThings" })
  numberOfInProgressThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfQueuedThings" })
  numberOfQueuedThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfRejectedThings" })
  numberOfRejectedThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfRemovedThings" })
  numberOfRemovedThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfTimedOutThings" })
  numberOfTimedOutThings?: number;

  @SpeakeasyMetadata({ data: "json, name=processingTargets" })
  processingTargets?: string[];
}
