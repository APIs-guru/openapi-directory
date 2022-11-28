import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesContentSubmission } from "./contentsubmissionsharedbusinessentitiescontentsubmission";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ContentSubmissionSharedBusinessEntitiesContentSubmission })
  entities: ContentSubmissionSharedBusinessEntitiesContentSubmission[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
