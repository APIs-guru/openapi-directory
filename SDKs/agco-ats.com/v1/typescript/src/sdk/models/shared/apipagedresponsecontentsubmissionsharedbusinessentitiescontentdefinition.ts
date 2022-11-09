import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentSubmissionSharedBusinessEntitiesContentDefinition } from "./contentsubmissionsharedbusinessentitiescontentdefinition";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ContentSubmissionSharedBusinessEntitiesContentDefinition })
  entities: ContentSubmissionSharedBusinessEntitiesContentDefinition[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
