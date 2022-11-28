import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute } from "./contentsubmissionsharedbusinessentitiescontentdefinitionattribute";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



// ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
/** 
 * A response containing a page of results and metadata concerning the results
**/
export class ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute })
  entities: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: ApiPagedResponseMetadata;
}
