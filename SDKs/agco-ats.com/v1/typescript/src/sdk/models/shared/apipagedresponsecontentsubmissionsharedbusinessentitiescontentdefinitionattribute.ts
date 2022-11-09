import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute } from "./contentsubmissionsharedbusinessentitiescontentdefinitionattribute";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute })
  entities: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[];

  @Metadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
