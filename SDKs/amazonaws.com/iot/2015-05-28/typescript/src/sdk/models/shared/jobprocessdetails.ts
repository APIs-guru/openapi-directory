import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobProcessDetails
/** 
 * The job process details.
**/
export class JobProcessDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfCanceledThings" })
  numberOfCanceledThings?: number;

  @Metadata({ data: "json, name=numberOfFailedThings" })
  numberOfFailedThings?: number;

  @Metadata({ data: "json, name=numberOfInProgressThings" })
  numberOfInProgressThings?: number;

  @Metadata({ data: "json, name=numberOfQueuedThings" })
  numberOfQueuedThings?: number;

  @Metadata({ data: "json, name=numberOfRejectedThings" })
  numberOfRejectedThings?: number;

  @Metadata({ data: "json, name=numberOfRemovedThings" })
  numberOfRemovedThings?: number;

  @Metadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;

  @Metadata({ data: "json, name=numberOfTimedOutThings" })
  numberOfTimedOutThings?: number;

  @Metadata({ data: "json, name=processingTargets" })
  processingTargets?: string[];
}
