import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute } from "./contentsubmissionsharedbusinessentitiescontentsubmissionattribute";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute })
  entities: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
