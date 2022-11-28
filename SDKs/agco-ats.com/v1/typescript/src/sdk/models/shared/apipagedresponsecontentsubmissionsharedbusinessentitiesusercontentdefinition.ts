import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesUserContentDefinition } from "./contentsubmissionsharedbusinessentitiesusercontentdefinition";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ContentSubmissionSharedBusinessEntitiesUserContentDefinition })
  entities: ContentSubmissionSharedBusinessEntitiesUserContentDefinition[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
