import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute } from "./contentsubmissionsharedbusinessentitiescontentsubmissionattribute";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute })
  entities: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
