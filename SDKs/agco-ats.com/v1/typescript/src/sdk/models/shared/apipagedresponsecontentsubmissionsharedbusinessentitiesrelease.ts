import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentSubmissionSharedBusinessEntitiesRelease } from "./contentsubmissionsharedbusinessentitiesrelease";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseContentSubmissionSharedBusinessEntitiesRelease
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesRelease extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ContentSubmissionSharedBusinessEntitiesRelease })
  entities: ContentSubmissionSharedBusinessEntitiesRelease[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
