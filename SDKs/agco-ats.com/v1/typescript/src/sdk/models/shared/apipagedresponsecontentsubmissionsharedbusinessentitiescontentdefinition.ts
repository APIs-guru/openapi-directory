import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesContentDefinition } from "./contentsubmissionsharedbusinessentitiescontentdefinition";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ContentSubmissionSharedBusinessEntitiesContentDefinition })
  entities: ContentSubmissionSharedBusinessEntitiesContentDefinition[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
