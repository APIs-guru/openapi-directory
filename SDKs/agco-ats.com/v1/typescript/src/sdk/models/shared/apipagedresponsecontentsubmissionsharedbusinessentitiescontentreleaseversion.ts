import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } from "./contentsubmissionsharedbusinessentitiescontentreleaseversion";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion })
  entities: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
